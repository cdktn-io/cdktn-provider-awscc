# `datapipelinePipeline` Submodule <a name="`datapipelinePipeline` Submodule" id="@cdktn/provider-awscc.datapipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatapipelinePipeline <a name="DatapipelinePipeline" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline awscc_datapipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipeline(Construct Scope, string Id, DatapipelinePipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig">DatapipelinePipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig">DatapipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects">PutParameterObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues">PutParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects">PutPipelineObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags">PutPipelineTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate">ResetActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects">ResetParameterObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues">ResetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects">ResetPipelineObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags">ResetPipelineTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameterObjects` <a name="PutParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects"></a>

```csharp
private void PutParameterObjects(IResolvable|DatapipelinePipelineParameterObjects[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]

---

##### `PutParameterValues` <a name="PutParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues"></a>

```csharp
private void PutParameterValues(IResolvable|DatapipelinePipelineParameterValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]

---

##### `PutPipelineObjects` <a name="PutPipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects"></a>

```csharp
private void PutPipelineObjects(IResolvable|DatapipelinePipelinePipelineObjects[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]

---

##### `PutPipelineTags` <a name="PutPipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags"></a>

```csharp
private void PutPipelineTags(IResolvable|DatapipelinePipelinePipelineTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]

---

##### `ResetActivate` <a name="ResetActivate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate"></a>

```csharp
private void ResetActivate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetParameterObjects` <a name="ResetParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects"></a>

```csharp
private void ResetParameterObjects()
```

##### `ResetParameterValues` <a name="ResetParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues"></a>

```csharp
private void ResetParameterValues()
```

##### `ResetPipelineObjects` <a name="ResetPipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects"></a>

```csharp
private void ResetPipelineObjects()
```

##### `ResetPipelineTags` <a name="ResetPipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags"></a>

```csharp
private void ResetPipelineTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatapipelinePipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatapipelinePipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatapipelinePipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatapipelinePipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatapipelinePipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatapipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatapipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects">ParameterObjects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues">ParameterValues</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects">PipelineObjects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags">PipelineTags</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput">ActivateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput">ParameterObjectsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput">ParameterValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput">PipelineObjectsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput">PipelineTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate">Activate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParameterObjects`<sup>Required</sup> <a name="ParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects"></a>

```csharp
public DatapipelinePipelineParameterObjectsList ParameterObjects { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a>

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues"></a>

```csharp
public DatapipelinePipelineParameterValuesList ParameterValues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `PipelineObjects`<sup>Required</sup> <a name="PipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects"></a>

```csharp
public DatapipelinePipelinePipelineObjectsList PipelineObjects { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a>

---

##### `PipelineTags`<sup>Required</sup> <a name="PipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags"></a>

```csharp
public DatapipelinePipelinePipelineTagsList PipelineTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a>

---

##### `ActivateInput`<sup>Optional</sup> <a name="ActivateInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput"></a>

```csharp
public bool|IResolvable ActivateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParameterObjectsInput`<sup>Optional</sup> <a name="ParameterObjectsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterObjects[] ParameterObjectsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]

---

##### `ParameterValuesInput`<sup>Optional</sup> <a name="ParameterValuesInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterValues[] ParameterValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]

---

##### `PipelineObjectsInput`<sup>Optional</sup> <a name="PipelineObjectsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineObjects[] PipelineObjectsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]

---

##### `PipelineTagsInput`<sup>Optional</sup> <a name="PipelineTagsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineTags[] PipelineTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]

---

##### `Activate`<sup>Required</sup> <a name="Activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate"></a>

```csharp
public bool|IResolvable Activate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineConfig <a name="DatapipelinePipelineConfig" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    bool|IResolvable Activate = null,
    string Description = null,
    IResolvable|DatapipelinePipelineParameterObjects[] ParameterObjects = null,
    IResolvable|DatapipelinePipelineParameterValues[] ParameterValues = null,
    IResolvable|DatapipelinePipelinePipelineObjects[] PipelineObjects = null,
    IResolvable|DatapipelinePipelinePipelineTags[] PipelineTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name">Name</a></code> | <code>string</code> | The name of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate">Activate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to validate and start the pipeline or stop an active pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description">Description</a></code> | <code>string</code> | A description of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects">ParameterObjects</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]</code> | The parameter objects used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues">ParameterValues</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]</code> | The parameter values used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects">PipelineObjects</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]</code> | The objects that define the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags">PipelineTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]</code> | A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

##### `Activate`<sup>Optional</sup> <a name="Activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate"></a>

```csharp
public bool|IResolvable Activate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to validate and start the pipeline or stop an active pipeline.

By default, the value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#activate DatapipelinePipeline#activate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#description DatapipelinePipeline#description}

---

##### `ParameterObjects`<sup>Optional</sup> <a name="ParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterObjects[] ParameterObjects { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]

The parameter objects used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#parameter_objects DatapipelinePipeline#parameter_objects}

---

##### `ParameterValues`<sup>Optional</sup> <a name="ParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterValues[] ParameterValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]

The parameter values used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#parameter_values DatapipelinePipeline#parameter_values}

---

##### `PipelineObjects`<sup>Optional</sup> <a name="PipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineObjects[] PipelineObjects { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]

The objects that define the pipeline.

These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#pipeline_objects DatapipelinePipeline#pipeline_objects}

---

##### `PipelineTags`<sup>Optional</sup> <a name="PipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineTags[] PipelineTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]

A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.

For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#pipeline_tags DatapipelinePipeline#pipeline_tags}

---

### DatapipelinePipelineParameterObjects <a name="DatapipelinePipelineParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineParameterObjects {
    IResolvable|DatapipelinePipelineParameterObjectsAttributes[] Attributes = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes">Attributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]</code> | The attributes of the parameter object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id">Id</a></code> | <code>string</code> | The ID of the parameter object. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterObjectsAttributes[] Attributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]

The attributes of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#attributes DatapipelinePipeline#attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DatapipelinePipelineParameterObjectsAttributes <a name="DatapipelinePipelineParameterObjectsAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineParameterObjectsAttributes {
    string Key = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key">Key</a></code> | <code>string</code> | The field identifier. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue">StringValue</a></code> | <code>string</code> | The field value, expressed as a String. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The field identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelineParameterValues <a name="DatapipelinePipelineParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineParameterValues {
    string Id = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id">Id</a></code> | <code>string</code> | The ID of the parameter value. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue">StringValue</a></code> | <code>string</code> | The field value, expressed as a String. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineObjects <a name="DatapipelinePipelinePipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelinePipelineObjects {
    IResolvable|DatapipelinePipelinePipelineObjectsFields[] Fields = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]</code> | Key-value pairs that define the properties of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id">Id</a></code> | <code>string</code> | The ID of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name">Name</a></code> | <code>string</code> | The name of the object. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineObjectsFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]

Key-value pairs that define the properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#fields DatapipelinePipeline#fields}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

### DatapipelinePipelinePipelineObjectsFields <a name="DatapipelinePipelinePipelineObjectsFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelinePipelineObjectsFields {
    string Key = null,
    string RefValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key">Key</a></code> | <code>string</code> | Specifies the name of a field for a particular object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue">RefValue</a></code> | <code>string</code> | A field value that you specify as an identifier of another object in the same pipeline definition. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue">StringValue</a></code> | <code>string</code> | A field value that you specify as a string. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Specifies the name of a field for a particular object.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `RefValue`<sup>Optional</sup> <a name="RefValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue"></a>

```csharp
public string RefValue { get; set; }
```

- *Type:* string

A field value that you specify as an identifier of another object in the same pipeline definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#ref_value DatapipelinePipeline#ref_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

A field value that you specify as a string.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineTags <a name="DatapipelinePipelinePipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelinePipelineTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key">Key</a></code> | <code>string</code> | The key name of a tag. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value">Value</a></code> | <code>string</code> | The value to associate with the key name. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value to associate with the key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datapipeline_pipeline#value DatapipelinePipeline#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelinePipelineParameterObjectsAttributesList <a name="DatapipelinePipelineParameterObjectsAttributesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineParameterObjectsAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get"></a>

```csharp
private DatapipelinePipelineParameterObjectsAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterObjectsAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]

---


### DatapipelinePipelineParameterObjectsAttributesOutputReference <a name="DatapipelinePipelineParameterObjectsAttributesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineParameterObjectsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterObjectsAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>

---


### DatapipelinePipelineParameterObjectsList <a name="DatapipelinePipelineParameterObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineParameterObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get"></a>

```csharp
private DatapipelinePipelineParameterObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterObjects[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>[]

---


### DatapipelinePipelineParameterObjectsOutputReference <a name="DatapipelinePipelineParameterObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineParameterObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes"></a>

```csharp
private void PutAttributes(IResolvable|DatapipelinePipelineParameterObjectsAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes"></a>

```csharp
public DatapipelinePipelineParameterObjectsAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterObjectsAttributes[] AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterObjects InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>

---


### DatapipelinePipelineParameterValuesList <a name="DatapipelinePipelineParameterValuesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineParameterValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get"></a>

```csharp
private DatapipelinePipelineParameterValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>[]

---


### DatapipelinePipelineParameterValuesOutputReference <a name="DatapipelinePipelineParameterValuesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelineParameterValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelineParameterValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>

---


### DatapipelinePipelinePipelineObjectsFieldsList <a name="DatapipelinePipelinePipelineObjectsFieldsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelinePipelineObjectsFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get"></a>

```csharp
private DatapipelinePipelinePipelineObjectsFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineObjectsFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]

---


### DatapipelinePipelinePipelineObjectsFieldsOutputReference <a name="DatapipelinePipelinePipelineObjectsFieldsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelinePipelineObjectsFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue">ResetRefValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetRefValue` <a name="ResetRefValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue"></a>

```csharp
private void ResetRefValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput">RefValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue">RefValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `RefValueInput`<sup>Optional</sup> <a name="RefValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput"></a>

```csharp
public string RefValueInput { get; }
```

- *Type:* string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RefValue`<sup>Required</sup> <a name="RefValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue"></a>

```csharp
public string RefValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineObjectsFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>

---


### DatapipelinePipelinePipelineObjectsList <a name="DatapipelinePipelinePipelineObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelinePipelineObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get"></a>

```csharp
private DatapipelinePipelinePipelineObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineObjects[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>[]

---


### DatapipelinePipelinePipelineObjectsOutputReference <a name="DatapipelinePipelinePipelineObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelinePipelineObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|DatapipelinePipelinePipelineObjectsFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields"></a>

```csharp
public DatapipelinePipelinePipelineObjectsFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineObjectsFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineObjects InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>

---


### DatapipelinePipelinePipelineTagsList <a name="DatapipelinePipelinePipelineTagsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelinePipelineTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get"></a>

```csharp
private DatapipelinePipelinePipelineTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>[]

---


### DatapipelinePipelinePipelineTagsOutputReference <a name="DatapipelinePipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatapipelinePipelinePipelineTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatapipelinePipelinePipelineTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>

---



