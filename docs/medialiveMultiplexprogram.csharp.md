# `medialiveMultiplexprogram` Submodule <a name="`medialiveMultiplexprogram` Submodule" id="@cdktn/provider-awscc.medialiveMultiplexprogram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplexprogram <a name="MedialiveMultiplexprogram" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram awscc_medialive_multiplexprogram}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogram(Construct Scope, string Id, MedialiveMultiplexprogramConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig">MedialiveMultiplexprogramConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig">MedialiveMultiplexprogramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings">PutMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap">PutPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails">PutPipelineDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexId">ResetMultiplexId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexProgramSettings">ResetMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPacketIdentifiersMap">ResetPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPipelineDetails">ResetPipelineDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPreferredChannelPipeline">ResetPreferredChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetProgramName">ResetProgramName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMultiplexProgramSettings` <a name="PutMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings"></a>

```csharp
private void PutMultiplexProgramSettings(MedialiveMultiplexprogramMultiplexProgramSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putMultiplexProgramSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---

##### `PutPacketIdentifiersMap` <a name="PutPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap"></a>

```csharp
private void PutPacketIdentifiersMap(MedialiveMultiplexprogramPacketIdentifiersMap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPacketIdentifiersMap.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---

##### `PutPipelineDetails` <a name="PutPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails"></a>

```csharp
private void PutPipelineDetails(IResolvable|MedialiveMultiplexprogramPipelineDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.putPipelineDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]

---

##### `ResetMultiplexId` <a name="ResetMultiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexId"></a>

```csharp
private void ResetMultiplexId()
```

##### `ResetMultiplexProgramSettings` <a name="ResetMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetMultiplexProgramSettings"></a>

```csharp
private void ResetMultiplexProgramSettings()
```

##### `ResetPacketIdentifiersMap` <a name="ResetPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPacketIdentifiersMap"></a>

```csharp
private void ResetPacketIdentifiersMap()
```

##### `ResetPipelineDetails` <a name="ResetPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPipelineDetails"></a>

```csharp
private void ResetPipelineDetails()
```

##### `ResetPreferredChannelPipeline` <a name="ResetPreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetPreferredChannelPipeline"></a>

```csharp
private void ResetPreferredChannelPipeline()
```

##### `ResetProgramName` <a name="ResetProgramName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.resetProgramName"></a>

```csharp
private void ResetProgramName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveMultiplexprogram.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveMultiplexprogram.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveMultiplexprogram.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveMultiplexprogram.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveMultiplexprogram to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveMultiplexprogram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveMultiplexprogram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettings">MultiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMap">PacketIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference">MedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetails">PipelineDetails</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList">MedialiveMultiplexprogramPipelineDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexIdInput">MultiplexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettingsInput">MultiplexProgramSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMapInput">PacketIdentifiersMapInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetailsInput">PipelineDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipelineInput">PreferredChannelPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programNameInput">ProgramNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexId">MultiplexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programName">ProgramName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiplexProgramSettings`<sup>Required</sup> <a name="MultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettings"></a>

```csharp
public MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference MultiplexProgramSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference</a>

---

##### `PacketIdentifiersMap`<sup>Required</sup> <a name="PacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMap"></a>

```csharp
public MedialiveMultiplexprogramPacketIdentifiersMapOutputReference PacketIdentifiersMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference">MedialiveMultiplexprogramPacketIdentifiersMapOutputReference</a>

---

##### `PipelineDetails`<sup>Required</sup> <a name="PipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetails"></a>

```csharp
public MedialiveMultiplexprogramPipelineDetailsList PipelineDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList">MedialiveMultiplexprogramPipelineDetailsList</a>

---

##### `MultiplexIdInput`<sup>Optional</sup> <a name="MultiplexIdInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexIdInput"></a>

```csharp
public string MultiplexIdInput { get; }
```

- *Type:* string

---

##### `MultiplexProgramSettingsInput`<sup>Optional</sup> <a name="MultiplexProgramSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexProgramSettingsInput"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettings MultiplexProgramSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---

##### `PacketIdentifiersMapInput`<sup>Optional</sup> <a name="PacketIdentifiersMapInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.packetIdentifiersMapInput"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramPacketIdentifiersMap PacketIdentifiersMapInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---

##### `PipelineDetailsInput`<sup>Optional</sup> <a name="PipelineDetailsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.pipelineDetailsInput"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramPipelineDetails[] PipelineDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]

---

##### `PreferredChannelPipelineInput`<sup>Optional</sup> <a name="PreferredChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipelineInput"></a>

```csharp
public string PreferredChannelPipelineInput { get; }
```

- *Type:* string

---

##### `ProgramNameInput`<sup>Optional</sup> <a name="ProgramNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programNameInput"></a>

```csharp
public string ProgramNameInput { get; }
```

- *Type:* string

---

##### `MultiplexId`<sup>Required</sup> <a name="MultiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.multiplexId"></a>

```csharp
public string MultiplexId { get; }
```

- *Type:* string

---

##### `PreferredChannelPipeline`<sup>Required</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.preferredChannelPipeline"></a>

```csharp
public string PreferredChannelPipeline { get; }
```

- *Type:* string

---

##### `ProgramName`<sup>Required</sup> <a name="ProgramName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.programName"></a>

```csharp
public string ProgramName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogram.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexprogramConfig <a name="MedialiveMultiplexprogramConfig" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MultiplexId = null,
    MedialiveMultiplexprogramMultiplexProgramSettings MultiplexProgramSettings = null,
    MedialiveMultiplexprogramPacketIdentifiersMap PacketIdentifiersMap = null,
    IResolvable|MedialiveMultiplexprogramPipelineDetails[] PipelineDetails = null,
    string PreferredChannelPipeline = null,
    string ProgramName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexId">MultiplexId</a></code> | <code>string</code> | The ID of the multiplex that the program belongs to. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexProgramSettings">MultiplexProgramSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.packetIdentifiersMap">PacketIdentifiersMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | The packet identifier map for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.pipelineDetails">PipelineDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]</code> | Contains information about the current sources for the specified program in the specified multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>string</code> | The settings for this multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.programName">ProgramName</a></code> | <code>string</code> | The name of the multiplex program. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MultiplexId`<sup>Optional</sup> <a name="MultiplexId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexId"></a>

```csharp
public string MultiplexId { get; set; }
```

- *Type:* string

The ID of the multiplex that the program belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#multiplex_id MedialiveMultiplexprogram#multiplex_id}

---

##### `MultiplexProgramSettings`<sup>Optional</sup> <a name="MultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.multiplexProgramSettings"></a>

```csharp
public MedialiveMultiplexprogramMultiplexProgramSettings MultiplexProgramSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#multiplex_program_settings MedialiveMultiplexprogram#multiplex_program_settings}

---

##### `PacketIdentifiersMap`<sup>Optional</sup> <a name="PacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.packetIdentifiersMap"></a>

```csharp
public MedialiveMultiplexprogramPacketIdentifiersMap PacketIdentifiersMap { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

The packet identifier map for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#packet_identifiers_map MedialiveMultiplexprogram#packet_identifiers_map}

---

##### `PipelineDetails`<sup>Optional</sup> <a name="PipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.pipelineDetails"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramPipelineDetails[] PipelineDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]

Contains information about the current sources for the specified program in the specified multiplex.

Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#pipeline_details MedialiveMultiplexprogram#pipeline_details}

---

##### `PreferredChannelPipeline`<sup>Optional</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.preferredChannelPipeline"></a>

```csharp
public string PreferredChannelPipeline { get; set; }
```

- *Type:* string

The settings for this multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}

---

##### `ProgramName`<sup>Optional</sup> <a name="ProgramName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramConfig.property.programName"></a>

```csharp
public string ProgramName { get; set; }
```

- *Type:* string

The name of the multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#program_name MedialiveMultiplexprogram#program_name}

---

### MedialiveMultiplexprogramMultiplexProgramSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramMultiplexProgramSettings {
    string PreferredChannelPipeline = null,
    double ProgramNumber = null,
    MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor ServiceDescriptor = null,
    MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings VideoSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>string</code> | Indicates which pipeline is preferred by the multiplex for program ingest. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.programNumber">ProgramNumber</a></code> | <code>double</code> | Unique program number. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.serviceDescriptor">ServiceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | Transport stream service descriptor configuration for the Multiplex program. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.videoSettings">VideoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | Program video settings configuration. |

---

##### `PreferredChannelPipeline`<sup>Optional</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

```csharp
public string PreferredChannelPipeline { get; set; }
```

- *Type:* string

Indicates which pipeline is preferred by the multiplex for program ingest.

If set to "PIPELINE_0" or "PIPELINE_1" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
it will switch back once that ingest is healthy again. If set to "CURRENTLY_ACTIVE",
it will not switch back to the other pipeline based on it recovering to a healthy state,
it will only switch if the active pipeline becomes unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}

---

##### `ProgramNumber`<sup>Optional</sup> <a name="ProgramNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.programNumber"></a>

```csharp
public double ProgramNumber { get; set; }
```

- *Type:* double

Unique program number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#program_number MedialiveMultiplexprogram#program_number}

---

##### `ServiceDescriptor`<sup>Optional</sup> <a name="ServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.serviceDescriptor"></a>

```csharp
public MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor ServiceDescriptor { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

Transport stream service descriptor configuration for the Multiplex program.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#service_descriptor MedialiveMultiplexprogram#service_descriptor}

---

##### `VideoSettings`<sup>Optional</sup> <a name="VideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings.property.videoSettings"></a>

```csharp
public MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings VideoSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

Program video settings configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#video_settings MedialiveMultiplexprogram#video_settings}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor <a name="MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor {
    string ProviderName = null,
    string ServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.providerName">ProviderName</a></code> | <code>string</code> | Name of the provider. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.serviceName">ServiceName</a></code> | <code>string</code> | Name of the service. |

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

Name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#provider_name MedialiveMultiplexprogram#provider_name}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#service_name MedialiveMultiplexprogram#service_name}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings {
    double ConstantBitrate = null,
    MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings StatmuxSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.constantBitrate">ConstantBitrate</a></code> | <code>double</code> | The constant bitrate configuration for the video encode. When this field is defined, StatmuxSettings must be undefined. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.statmuxSettings">StatmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | Statmux rate control settings. When this field is defined, ConstantBitrate must be undefined. |

---

##### `ConstantBitrate`<sup>Optional</sup> <a name="ConstantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

```csharp
public double ConstantBitrate { get; set; }
```

- *Type:* double

The constant bitrate configuration for the video encode. When this field is defined, StatmuxSettings must be undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#constant_bitrate MedialiveMultiplexprogram#constant_bitrate}

---

##### `StatmuxSettings`<sup>Optional</sup> <a name="StatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

```csharp
public MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings StatmuxSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

Statmux rate control settings. When this field is defined, ConstantBitrate must be undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#statmux_settings MedialiveMultiplexprogram#statmux_settings}

---

### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
    double MaximumBitrate = null,
    double MinimumBitrate = null,
    double Priority = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate">MaximumBitrate</a></code> | <code>double</code> | Maximum statmux bitrate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate">MinimumBitrate</a></code> | <code>double</code> | Minimum statmux bitrate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority">Priority</a></code> | <code>double</code> | The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others. |

---

##### `MaximumBitrate`<sup>Optional</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

```csharp
public double MaximumBitrate { get; set; }
```

- *Type:* double

Maximum statmux bitrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#maximum_bitrate MedialiveMultiplexprogram#maximum_bitrate}

---

##### `MinimumBitrate`<sup>Optional</sup> <a name="MinimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

```csharp
public double MinimumBitrate { get; set; }
```

- *Type:* double

Minimum statmux bitrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#minimum_bitrate MedialiveMultiplexprogram#minimum_bitrate}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.

Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#priority MedialiveMultiplexprogram#priority}

---

### MedialiveMultiplexprogramPacketIdentifiersMap <a name="MedialiveMultiplexprogramPacketIdentifiersMap" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramPacketIdentifiersMap {
    double[] AudioPids = null,
    double[] DvbSubPids = null,
    double DvbTeletextPid = null,
    double EtvPlatformPid = null,
    double EtvSignalPid = null,
    double[] KlvDataPids = null,
    double PcrPid = null,
    double PmtPid = null,
    double PrivateMetadataPid = null,
    double[] Scte27Pids = null,
    double Scte35Pid = null,
    double TimedMetadataPid = null,
    double VideoPid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.audioPids">AudioPids</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#audio_pids MedialiveMultiplexprogram#audio_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbSubPids">DvbSubPids</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#dvb_sub_pids MedialiveMultiplexprogram#dvb_sub_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbTeletextPid">DvbTeletextPid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#dvb_teletext_pid MedialiveMultiplexprogram#dvb_teletext_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvPlatformPid">EtvPlatformPid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#etv_platform_pid MedialiveMultiplexprogram#etv_platform_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvSignalPid">EtvSignalPid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#etv_signal_pid MedialiveMultiplexprogram#etv_signal_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.klvDataPids">KlvDataPids</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#klv_data_pids MedialiveMultiplexprogram#klv_data_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pcrPid">PcrPid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#pcr_pid MedialiveMultiplexprogram#pcr_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pmtPid">PmtPid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#pmt_pid MedialiveMultiplexprogram#pmt_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.privateMetadataPid">PrivateMetadataPid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#private_metadata_pid MedialiveMultiplexprogram#private_metadata_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte27Pids">Scte27Pids</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#scte_27_pids MedialiveMultiplexprogram#scte_27_pids}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte35Pid">Scte35Pid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#scte_35_pid MedialiveMultiplexprogram#scte_35_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.timedMetadataPid">TimedMetadataPid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#timed_metadata_pid MedialiveMultiplexprogram#timed_metadata_pid}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.videoPid">VideoPid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#video_pid MedialiveMultiplexprogram#video_pid}. |

---

##### `AudioPids`<sup>Optional</sup> <a name="AudioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.audioPids"></a>

```csharp
public double[] AudioPids { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#audio_pids MedialiveMultiplexprogram#audio_pids}.

---

##### `DvbSubPids`<sup>Optional</sup> <a name="DvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbSubPids"></a>

```csharp
public double[] DvbSubPids { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#dvb_sub_pids MedialiveMultiplexprogram#dvb_sub_pids}.

---

##### `DvbTeletextPid`<sup>Optional</sup> <a name="DvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.dvbTeletextPid"></a>

```csharp
public double DvbTeletextPid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#dvb_teletext_pid MedialiveMultiplexprogram#dvb_teletext_pid}.

---

##### `EtvPlatformPid`<sup>Optional</sup> <a name="EtvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvPlatformPid"></a>

```csharp
public double EtvPlatformPid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#etv_platform_pid MedialiveMultiplexprogram#etv_platform_pid}.

---

##### `EtvSignalPid`<sup>Optional</sup> <a name="EtvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.etvSignalPid"></a>

```csharp
public double EtvSignalPid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#etv_signal_pid MedialiveMultiplexprogram#etv_signal_pid}.

---

##### `KlvDataPids`<sup>Optional</sup> <a name="KlvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.klvDataPids"></a>

```csharp
public double[] KlvDataPids { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#klv_data_pids MedialiveMultiplexprogram#klv_data_pids}.

---

##### `PcrPid`<sup>Optional</sup> <a name="PcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pcrPid"></a>

```csharp
public double PcrPid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#pcr_pid MedialiveMultiplexprogram#pcr_pid}.

---

##### `PmtPid`<sup>Optional</sup> <a name="PmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.pmtPid"></a>

```csharp
public double PmtPid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#pmt_pid MedialiveMultiplexprogram#pmt_pid}.

---

##### `PrivateMetadataPid`<sup>Optional</sup> <a name="PrivateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.privateMetadataPid"></a>

```csharp
public double PrivateMetadataPid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#private_metadata_pid MedialiveMultiplexprogram#private_metadata_pid}.

---

##### `Scte27Pids`<sup>Optional</sup> <a name="Scte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte27Pids"></a>

```csharp
public double[] Scte27Pids { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#scte_27_pids MedialiveMultiplexprogram#scte_27_pids}.

---

##### `Scte35Pid`<sup>Optional</sup> <a name="Scte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.scte35Pid"></a>

```csharp
public double Scte35Pid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#scte_35_pid MedialiveMultiplexprogram#scte_35_pid}.

---

##### `TimedMetadataPid`<sup>Optional</sup> <a name="TimedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.timedMetadataPid"></a>

```csharp
public double TimedMetadataPid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#timed_metadata_pid MedialiveMultiplexprogram#timed_metadata_pid}.

---

##### `VideoPid`<sup>Optional</sup> <a name="VideoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap.property.videoPid"></a>

```csharp
public double VideoPid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#video_pid MedialiveMultiplexprogram#video_pid}.

---

### MedialiveMultiplexprogramPipelineDetails <a name="MedialiveMultiplexprogramPipelineDetails" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramPipelineDetails {
    string ActiveChannelPipeline = null,
    string PipelineId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.activeChannelPipeline">ActiveChannelPipeline</a></code> | <code>string</code> | Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.pipelineId">PipelineId</a></code> | <code>string</code> | Identifies a specific pipeline in the multiplex. |

---

##### `ActiveChannelPipeline`<sup>Optional</sup> <a name="ActiveChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.activeChannelPipeline"></a>

```csharp
public string ActiveChannelPipeline { get; set; }
```

- *Type:* string

Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#active_channel_pipeline MedialiveMultiplexprogram#active_channel_pipeline}

---

##### `PipelineId`<sup>Optional</sup> <a name="PipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails.property.pipelineId"></a>

```csharp
public string PipelineId { get; set; }
```

- *Type:* string

Identifies a specific pipeline in the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/medialive_multiplexprogram#pipeline_id MedialiveMultiplexprogram#pipeline_id}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor">PutServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings">PutVideoSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetPreferredChannelPipeline">ResetPreferredChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetProgramNumber">ResetProgramNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetServiceDescriptor">ResetServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetVideoSettings">ResetVideoSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDescriptor` <a name="PutServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor"></a>

```csharp
private void PutServiceDescriptor(MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putServiceDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---

##### `PutVideoSettings` <a name="PutVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings"></a>

```csharp
private void PutVideoSettings(MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.putVideoSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---

##### `ResetPreferredChannelPipeline` <a name="ResetPreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetPreferredChannelPipeline"></a>

```csharp
private void ResetPreferredChannelPipeline()
```

##### `ResetProgramNumber` <a name="ResetProgramNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetProgramNumber"></a>

```csharp
private void ResetProgramNumber()
```

##### `ResetServiceDescriptor` <a name="ResetServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetServiceDescriptor"></a>

```csharp
private void ResetServiceDescriptor()
```

##### `ResetVideoSettings` <a name="ResetVideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.resetVideoSettings"></a>

```csharp
private void ResetVideoSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">ServiceDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings">VideoSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput">PreferredChannelPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumberInput">ProgramNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput">ServiceDescriptorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettingsInput">VideoSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber">ProgramNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceDescriptor`<sup>Required</sup> <a name="ServiceDescriptor" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```csharp
public MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference ServiceDescriptor { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference</a>

---

##### `VideoSettings`<sup>Required</sup> <a name="VideoSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```csharp
public MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference VideoSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference</a>

---

##### `PreferredChannelPipelineInput`<sup>Optional</sup> <a name="PreferredChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput"></a>

```csharp
public string PreferredChannelPipelineInput { get; }
```

- *Type:* string

---

##### `ProgramNumberInput`<sup>Optional</sup> <a name="ProgramNumberInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumberInput"></a>

```csharp
public double ProgramNumberInput { get; }
```

- *Type:* double

---

##### `ServiceDescriptorInput`<sup>Optional</sup> <a name="ServiceDescriptorInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor ServiceDescriptorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---

##### `VideoSettingsInput`<sup>Optional</sup> <a name="VideoSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.videoSettingsInput"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings VideoSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---

##### `PreferredChannelPipeline`<sup>Required</sup> <a name="PreferredChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```csharp
public string PreferredChannelPipeline { get; }
```

- *Type:* string

---

##### `ProgramNumber`<sup>Required</sup> <a name="ProgramNumber" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```csharp
public double ProgramNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettings">MedialiveMultiplexprogramMultiplexProgramSettings</a>

---


### MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetProviderName">ResetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetProviderName"></a>

```csharp
private void ResetProviderName()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor</a>

---


### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings">PutStatmuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate">ResetConstantBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings">ResetStatmuxSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStatmuxSettings` <a name="PutStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings"></a>

```csharp
private void PutStatmuxSettings(MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---

##### `ResetConstantBitrate` <a name="ResetConstantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate"></a>

```csharp
private void ResetConstantBitrate()
```

##### `ResetStatmuxSettings` <a name="ResetStatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings"></a>

```csharp
private void ResetStatmuxSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">StatmuxSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput">ConstantBitrateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput">StatmuxSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">ConstantBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatmuxSettings`<sup>Required</sup> <a name="StatmuxSettings" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```csharp
public MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference StatmuxSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference</a>

---

##### `ConstantBitrateInput`<sup>Optional</sup> <a name="ConstantBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput"></a>

```csharp
public double ConstantBitrateInput { get; }
```

- *Type:* double

---

##### `StatmuxSettingsInput`<sup>Optional</sup> <a name="StatmuxSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings StatmuxSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---

##### `ConstantBitrate`<sup>Required</sup> <a name="ConstantBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```csharp
public double ConstantBitrate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings</a>

---


### MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate">ResetMaximumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate">ResetMinimumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumBitrate` <a name="ResetMaximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate"></a>

```csharp
private void ResetMaximumBitrate()
```

##### `ResetMinimumBitrate` <a name="ResetMinimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate"></a>

```csharp
private void ResetMinimumBitrate()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput">MaximumBitrateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput">MinimumBitrateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">MaximumBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">MinimumBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBitrateInput`<sup>Optional</sup> <a name="MaximumBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput"></a>

```csharp
public double MaximumBitrateInput { get; }
```

- *Type:* double

---

##### `MinimumBitrateInput`<sup>Optional</sup> <a name="MinimumBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput"></a>

```csharp
public double MinimumBitrateInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```csharp
public double MaximumBitrate { get; }
```

- *Type:* double

---

##### `MinimumBitrate`<sup>Required</sup> <a name="MinimumBitrate" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```csharp
public double MinimumBitrate { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>

---


### MedialiveMultiplexprogramPacketIdentifiersMapOutputReference <a name="MedialiveMultiplexprogramPacketIdentifiersMapOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramPacketIdentifiersMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetAudioPids">ResetAudioPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbSubPids">ResetDvbSubPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbTeletextPid">ResetDvbTeletextPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvPlatformPid">ResetEtvPlatformPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvSignalPid">ResetEtvSignalPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetKlvDataPids">ResetKlvDataPids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPcrPid">ResetPcrPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPmtPid">ResetPmtPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPrivateMetadataPid">ResetPrivateMetadataPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte27Pids">ResetScte27Pids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte35Pid">ResetScte35Pid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetTimedMetadataPid">ResetTimedMetadataPid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetVideoPid">ResetVideoPid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioPids` <a name="ResetAudioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetAudioPids"></a>

```csharp
private void ResetAudioPids()
```

##### `ResetDvbSubPids` <a name="ResetDvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbSubPids"></a>

```csharp
private void ResetDvbSubPids()
```

##### `ResetDvbTeletextPid` <a name="ResetDvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetDvbTeletextPid"></a>

```csharp
private void ResetDvbTeletextPid()
```

##### `ResetEtvPlatformPid` <a name="ResetEtvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvPlatformPid"></a>

```csharp
private void ResetEtvPlatformPid()
```

##### `ResetEtvSignalPid` <a name="ResetEtvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetEtvSignalPid"></a>

```csharp
private void ResetEtvSignalPid()
```

##### `ResetKlvDataPids` <a name="ResetKlvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetKlvDataPids"></a>

```csharp
private void ResetKlvDataPids()
```

##### `ResetPcrPid` <a name="ResetPcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPcrPid"></a>

```csharp
private void ResetPcrPid()
```

##### `ResetPmtPid` <a name="ResetPmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPmtPid"></a>

```csharp
private void ResetPmtPid()
```

##### `ResetPrivateMetadataPid` <a name="ResetPrivateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetPrivateMetadataPid"></a>

```csharp
private void ResetPrivateMetadataPid()
```

##### `ResetScte27Pids` <a name="ResetScte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte27Pids"></a>

```csharp
private void ResetScte27Pids()
```

##### `ResetScte35Pid` <a name="ResetScte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetScte35Pid"></a>

```csharp
private void ResetScte35Pid()
```

##### `ResetTimedMetadataPid` <a name="ResetTimedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetTimedMetadataPid"></a>

```csharp
private void ResetTimedMetadataPid()
```

##### `ResetVideoPid` <a name="ResetVideoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.resetVideoPid"></a>

```csharp
private void ResetVideoPid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPidsInput">AudioPidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPidsInput">DvbSubPidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPidInput">DvbTeletextPidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPidInput">EtvPlatformPidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPidInput">EtvSignalPidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPidsInput">KlvDataPidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPidInput">PcrPidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPidInput">PmtPidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPidInput">PrivateMetadataPidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27PidsInput">Scte27PidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35PidInput">Scte35PidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPidInput">TimedMetadataPidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPidInput">VideoPidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids">AudioPids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids">DvbSubPids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid">DvbTeletextPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid">EtvPlatformPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid">EtvSignalPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids">KlvDataPids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid">PcrPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid">PmtPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid">PrivateMetadataPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids">Scte27Pids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid">Scte35Pid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid">TimedMetadataPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid">VideoPid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioPidsInput`<sup>Optional</sup> <a name="AudioPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPidsInput"></a>

```csharp
public double[] AudioPidsInput { get; }
```

- *Type:* double[]

---

##### `DvbSubPidsInput`<sup>Optional</sup> <a name="DvbSubPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPidsInput"></a>

```csharp
public double[] DvbSubPidsInput { get; }
```

- *Type:* double[]

---

##### `DvbTeletextPidInput`<sup>Optional</sup> <a name="DvbTeletextPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPidInput"></a>

```csharp
public double DvbTeletextPidInput { get; }
```

- *Type:* double

---

##### `EtvPlatformPidInput`<sup>Optional</sup> <a name="EtvPlatformPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPidInput"></a>

```csharp
public double EtvPlatformPidInput { get; }
```

- *Type:* double

---

##### `EtvSignalPidInput`<sup>Optional</sup> <a name="EtvSignalPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPidInput"></a>

```csharp
public double EtvSignalPidInput { get; }
```

- *Type:* double

---

##### `KlvDataPidsInput`<sup>Optional</sup> <a name="KlvDataPidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPidsInput"></a>

```csharp
public double[] KlvDataPidsInput { get; }
```

- *Type:* double[]

---

##### `PcrPidInput`<sup>Optional</sup> <a name="PcrPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPidInput"></a>

```csharp
public double PcrPidInput { get; }
```

- *Type:* double

---

##### `PmtPidInput`<sup>Optional</sup> <a name="PmtPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPidInput"></a>

```csharp
public double PmtPidInput { get; }
```

- *Type:* double

---

##### `PrivateMetadataPidInput`<sup>Optional</sup> <a name="PrivateMetadataPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPidInput"></a>

```csharp
public double PrivateMetadataPidInput { get; }
```

- *Type:* double

---

##### `Scte27PidsInput`<sup>Optional</sup> <a name="Scte27PidsInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27PidsInput"></a>

```csharp
public double[] Scte27PidsInput { get; }
```

- *Type:* double[]

---

##### `Scte35PidInput`<sup>Optional</sup> <a name="Scte35PidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35PidInput"></a>

```csharp
public double Scte35PidInput { get; }
```

- *Type:* double

---

##### `TimedMetadataPidInput`<sup>Optional</sup> <a name="TimedMetadataPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPidInput"></a>

```csharp
public double TimedMetadataPidInput { get; }
```

- *Type:* double

---

##### `VideoPidInput`<sup>Optional</sup> <a name="VideoPidInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPidInput"></a>

```csharp
public double VideoPidInput { get; }
```

- *Type:* double

---

##### `AudioPids`<sup>Required</sup> <a name="AudioPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.audioPids"></a>

```csharp
public double[] AudioPids { get; }
```

- *Type:* double[]

---

##### `DvbSubPids`<sup>Required</sup> <a name="DvbSubPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbSubPids"></a>

```csharp
public double[] DvbSubPids { get; }
```

- *Type:* double[]

---

##### `DvbTeletextPid`<sup>Required</sup> <a name="DvbTeletextPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.dvbTeletextPid"></a>

```csharp
public double DvbTeletextPid { get; }
```

- *Type:* double

---

##### `EtvPlatformPid`<sup>Required</sup> <a name="EtvPlatformPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvPlatformPid"></a>

```csharp
public double EtvPlatformPid { get; }
```

- *Type:* double

---

##### `EtvSignalPid`<sup>Required</sup> <a name="EtvSignalPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.etvSignalPid"></a>

```csharp
public double EtvSignalPid { get; }
```

- *Type:* double

---

##### `KlvDataPids`<sup>Required</sup> <a name="KlvDataPids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.klvDataPids"></a>

```csharp
public double[] KlvDataPids { get; }
```

- *Type:* double[]

---

##### `PcrPid`<sup>Required</sup> <a name="PcrPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pcrPid"></a>

```csharp
public double PcrPid { get; }
```

- *Type:* double

---

##### `PmtPid`<sup>Required</sup> <a name="PmtPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.pmtPid"></a>

```csharp
public double PmtPid { get; }
```

- *Type:* double

---

##### `PrivateMetadataPid`<sup>Required</sup> <a name="PrivateMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.privateMetadataPid"></a>

```csharp
public double PrivateMetadataPid { get; }
```

- *Type:* double

---

##### `Scte27Pids`<sup>Required</sup> <a name="Scte27Pids" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte27Pids"></a>

```csharp
public double[] Scte27Pids { get; }
```

- *Type:* double[]

---

##### `Scte35Pid`<sup>Required</sup> <a name="Scte35Pid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.scte35Pid"></a>

```csharp
public double Scte35Pid { get; }
```

- *Type:* double

---

##### `TimedMetadataPid`<sup>Required</sup> <a name="TimedMetadataPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.timedMetadataPid"></a>

```csharp
public double TimedMetadataPid { get; }
```

- *Type:* double

---

##### `VideoPid`<sup>Required</sup> <a name="VideoPid" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.videoPid"></a>

```csharp
public double VideoPid { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMapOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramPacketIdentifiersMap InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPacketIdentifiersMap">MedialiveMultiplexprogramPacketIdentifiersMap</a>

---


### MedialiveMultiplexprogramPipelineDetailsList <a name="MedialiveMultiplexprogramPipelineDetailsList" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramPipelineDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get"></a>

```csharp
private MedialiveMultiplexprogramPipelineDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramPipelineDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>[]

---


### MedialiveMultiplexprogramPipelineDetailsOutputReference <a name="MedialiveMultiplexprogramPipelineDetailsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveMultiplexprogramPipelineDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetActiveChannelPipeline">ResetActiveChannelPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetPipelineId">ResetPipelineId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveChannelPipeline` <a name="ResetActiveChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetActiveChannelPipeline"></a>

```csharp
private void ResetActiveChannelPipeline()
```

##### `ResetPipelineId` <a name="ResetPipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.resetPipelineId"></a>

```csharp
private void ResetPipelineId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipelineInput">ActiveChannelPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineIdInput">PipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline">ActiveChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveChannelPipelineInput`<sup>Optional</sup> <a name="ActiveChannelPipelineInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipelineInput"></a>

```csharp
public string ActiveChannelPipelineInput { get; }
```

- *Type:* string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineIdInput"></a>

```csharp
public string PipelineIdInput { get; }
```

- *Type:* string

---

##### `ActiveChannelPipeline`<sup>Required</sup> <a name="ActiveChannelPipeline" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.activeChannelPipeline"></a>

```csharp
public string ActiveChannelPipeline { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveMultiplexprogramPipelineDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveMultiplexprogram.MedialiveMultiplexprogramPipelineDetails">MedialiveMultiplexprogramPipelineDetails</a>

---



