# `entityresolutionIdMappingWorkflow` Submodule <a name="`entityresolutionIdMappingWorkflow` Submodule" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionIdMappingWorkflow <a name="EntityresolutionIdMappingWorkflow" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflow(Construct Scope, string Id, EntityresolutionIdMappingWorkflowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig">EntityresolutionIdMappingWorkflowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig">EntityresolutionIdMappingWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingIncrementalRunConfig">PutIdMappingIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques">PutIdMappingTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putInputSourceConfig">PutInputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putOutputSourceConfig">PutOutputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetIdMappingIncrementalRunConfig">ResetIdMappingIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOutputSourceConfig">ResetOutputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdMappingIncrementalRunConfig` <a name="PutIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingIncrementalRunConfig"></a>

```csharp
private void PutIdMappingIncrementalRunConfig(EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingIncrementalRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---

##### `PutIdMappingTechniques` <a name="PutIdMappingTechniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques"></a>

```csharp
private void PutIdMappingTechniques(EntityresolutionIdMappingWorkflowIdMappingTechniques Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---

##### `PutInputSourceConfig` <a name="PutInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putInputSourceConfig"></a>

```csharp
private void PutInputSourceConfig(IResolvable|EntityresolutionIdMappingWorkflowInputSourceConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putInputSourceConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]

---

##### `PutOutputSourceConfig` <a name="PutOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putOutputSourceConfig"></a>

```csharp
private void PutOutputSourceConfig(IResolvable|EntityresolutionIdMappingWorkflowOutputSourceConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putOutputSourceConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putTags"></a>

```csharp
private void PutTags(IResolvable|EntityresolutionIdMappingWorkflowTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIdMappingIncrementalRunConfig` <a name="ResetIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetIdMappingIncrementalRunConfig"></a>

```csharp
private void ResetIdMappingIncrementalRunConfig()
```

##### `ResetOutputSourceConfig` <a name="ResetOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOutputSourceConfig"></a>

```csharp
private void ResetOutputSourceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionIdMappingWorkflow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionIdMappingWorkflow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionIdMappingWorkflow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionIdMappingWorkflow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EntityresolutionIdMappingWorkflow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EntityresolutionIdMappingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionIdMappingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig">IdMappingIncrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniques">IdMappingTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfig">InputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList">EntityresolutionIdMappingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfig">OutputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList">EntityresolutionIdMappingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList">EntityresolutionIdMappingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowArn">WorkflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfigInput">IdMappingIncrementalRunConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniquesInput">IdMappingTechniquesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfigInput">InputSourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfigInput">OutputSourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowNameInput">WorkflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdMappingIncrementalRunConfig`<sup>Required</sup> <a name="IdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference IdMappingIncrementalRunConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a>

---

##### `IdMappingTechniques`<sup>Required</sup> <a name="IdMappingTechniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniques"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference IdMappingTechniques { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a>

---

##### `InputSourceConfig`<sup>Required</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfig"></a>

```csharp
public EntityresolutionIdMappingWorkflowInputSourceConfigList InputSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList">EntityresolutionIdMappingWorkflowInputSourceConfigList</a>

---

##### `OutputSourceConfig`<sup>Required</sup> <a name="OutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfig"></a>

```csharp
public EntityresolutionIdMappingWorkflowOutputSourceConfigList OutputSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList">EntityresolutionIdMappingWorkflowOutputSourceConfigList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tags"></a>

```csharp
public EntityresolutionIdMappingWorkflowTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList">EntityresolutionIdMappingWorkflowTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowArn"></a>

```csharp
public string WorkflowArn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdMappingIncrementalRunConfigInput`<sup>Optional</sup> <a name="IdMappingIncrementalRunConfigInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfigInput"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig IdMappingIncrementalRunConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---

##### `IdMappingTechniquesInput`<sup>Optional</sup> <a name="IdMappingTechniquesInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniquesInput"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniques IdMappingTechniquesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---

##### `InputSourceConfigInput`<sup>Optional</sup> <a name="InputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfigInput"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowInputSourceConfig[] InputSourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]

---

##### `OutputSourceConfigInput`<sup>Optional</sup> <a name="OutputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfigInput"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowOutputSourceConfig[] OutputSourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tagsInput"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowNameInput"></a>

```csharp
public string WorkflowNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionIdMappingWorkflowConfig <a name="EntityresolutionIdMappingWorkflowConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    EntityresolutionIdMappingWorkflowIdMappingTechniques IdMappingTechniques,
    IResolvable|EntityresolutionIdMappingWorkflowInputSourceConfig[] InputSourceConfig,
    string RoleArn,
    string WorkflowName,
    string Description = null,
    EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig IdMappingIncrementalRunConfig = null,
    IResolvable|EntityresolutionIdMappingWorkflowOutputSourceConfig[] OutputSourceConfig = null,
    IResolvable|EntityresolutionIdMappingWorkflowTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingTechniques">IdMappingTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_techniques EntityresolutionIdMappingWorkflow#id_mapping_techniques}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.inputSourceConfig">InputSourceConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#input_source_config EntityresolutionIdMappingWorkflow#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#role_arn EntityresolutionIdMappingWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.workflowName">WorkflowName</a></code> | <code>string</code> | The name of the IdMappingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.description">Description</a></code> | <code>string</code> | The description of the IdMappingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingIncrementalRunConfig">IdMappingIncrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_incremental_run_config EntityresolutionIdMappingWorkflow#id_mapping_incremental_run_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.outputSourceConfig">OutputSourceConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#output_source_config EntityresolutionIdMappingWorkflow#output_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#tags EntityresolutionIdMappingWorkflow#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdMappingTechniques`<sup>Required</sup> <a name="IdMappingTechniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingTechniques"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingTechniques IdMappingTechniques { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_techniques EntityresolutionIdMappingWorkflow#id_mapping_techniques}.

---

##### `InputSourceConfig`<sup>Required</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.inputSourceConfig"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowInputSourceConfig[] InputSourceConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#input_source_config EntityresolutionIdMappingWorkflow#input_source_config}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#role_arn EntityresolutionIdMappingWorkflow#role_arn}.

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.workflowName"></a>

```csharp
public string WorkflowName { get; set; }
```

- *Type:* string

The name of the IdMappingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#workflow_name EntityresolutionIdMappingWorkflow#workflow_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the IdMappingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#description EntityresolutionIdMappingWorkflow#description}

---

##### `IdMappingIncrementalRunConfig`<sup>Optional</sup> <a name="IdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingIncrementalRunConfig"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig IdMappingIncrementalRunConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_incremental_run_config EntityresolutionIdMappingWorkflow#id_mapping_incremental_run_config}.

---

##### `OutputSourceConfig`<sup>Optional</sup> <a name="OutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.outputSourceConfig"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowOutputSourceConfig[] OutputSourceConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#output_source_config EntityresolutionIdMappingWorkflow#output_source_config}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.tags"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#tags EntityresolutionIdMappingWorkflow#tags}.

---

### EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig <a name="EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig {
    string IncrementalRunType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.property.incrementalRunType">IncrementalRunType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#incremental_run_type EntityresolutionIdMappingWorkflow#incremental_run_type}. |

---

##### `IncrementalRunType`<sup>Optional</sup> <a name="IncrementalRunType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.property.incrementalRunType"></a>

```csharp
public string IncrementalRunType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#incremental_run_type EntityresolutionIdMappingWorkflow#incremental_run_type}.

---

### EntityresolutionIdMappingWorkflowIdMappingTechniques <a name="EntityresolutionIdMappingWorkflowIdMappingTechniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniques {
    string IdMappingType = null,
    string NormalizationVersion = null,
    EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties ProviderProperties = null,
    EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties RuleBasedProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.idMappingType">IdMappingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_type EntityresolutionIdMappingWorkflow#id_mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.normalizationVersion">NormalizationVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#normalization_version EntityresolutionIdMappingWorkflow#normalization_version}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_properties EntityresolutionIdMappingWorkflow#provider_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_based_properties EntityresolutionIdMappingWorkflow#rule_based_properties}. |

---

##### `IdMappingType`<sup>Optional</sup> <a name="IdMappingType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.idMappingType"></a>

```csharp
public string IdMappingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_type EntityresolutionIdMappingWorkflow#id_mapping_type}.

---

##### `NormalizationVersion`<sup>Optional</sup> <a name="NormalizationVersion" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.normalizationVersion"></a>

```csharp
public string NormalizationVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#normalization_version EntityresolutionIdMappingWorkflow#normalization_version}.

---

##### `ProviderProperties`<sup>Optional</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.providerProperties"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties ProviderProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_properties EntityresolutionIdMappingWorkflow#provider_properties}.

---

##### `RuleBasedProperties`<sup>Optional</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.ruleBasedProperties"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties RuleBasedProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_based_properties EntityresolutionIdMappingWorkflow#rule_based_properties}.

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties {
    EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration IntermediateSourceConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> ProviderConfiguration = null,
    string ProviderServiceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.intermediateSourceConfiguration">IntermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_source_configuration EntityresolutionIdMappingWorkflow#intermediate_source_configuration}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerConfiguration">ProviderConfiguration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerServiceArn">ProviderServiceArn</a></code> | <code>string</code> | Arn of the Provider Service being used. |

---

##### `IntermediateSourceConfiguration`<sup>Optional</sup> <a name="IntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.intermediateSourceConfiguration"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration IntermediateSourceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_source_configuration EntityresolutionIdMappingWorkflow#intermediate_source_configuration}.

---

##### `ProviderConfiguration`<sup>Optional</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerConfiguration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProviderConfiguration { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_configuration EntityresolutionIdMappingWorkflow#provider_configuration}

---

##### `ProviderServiceArn`<sup>Optional</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerServiceArn"></a>

```csharp
public string ProviderServiceArn { get; set; }
```

- *Type:* string

Arn of the Provider Service being used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_service_arn EntityresolutionIdMappingWorkflow#provider_service_arn}

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration {
    string IntermediateS3Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path">IntermediateS3Path</a></code> | <code>string</code> | The s3 path that would be used to stage the intermediate data being generated during workflow execution. |

---

##### `IntermediateS3Path`<sup>Optional</sup> <a name="IntermediateS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path"></a>

```csharp
public string IntermediateS3Path { get; set; }
```

- *Type:* string

The s3 path that would be used to stage the intermediate data being generated during workflow execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_s3_path EntityresolutionIdMappingWorkflow#intermediate_s3_path}

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties {
    string AttributeMatchingModel = null,
    string RecordMatchingModel = null,
    string RuleDefinitionType = null,
    IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[] Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#attribute_matching_model EntityresolutionIdMappingWorkflow#attribute_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.recordMatchingModel">RecordMatchingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#record_matching_model EntityresolutionIdMappingWorkflow#record_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.ruleDefinitionType">RuleDefinitionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_definition_type EntityresolutionIdMappingWorkflow#rule_definition_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rules EntityresolutionIdMappingWorkflow#rules}. |

---

##### `AttributeMatchingModel`<sup>Optional</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.attributeMatchingModel"></a>

```csharp
public string AttributeMatchingModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#attribute_matching_model EntityresolutionIdMappingWorkflow#attribute_matching_model}.

---

##### `RecordMatchingModel`<sup>Optional</sup> <a name="RecordMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.recordMatchingModel"></a>

```csharp
public string RecordMatchingModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#record_matching_model EntityresolutionIdMappingWorkflow#record_matching_model}.

---

##### `RuleDefinitionType`<sup>Optional</sup> <a name="RuleDefinitionType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.ruleDefinitionType"></a>

```csharp
public string RuleDefinitionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_definition_type EntityresolutionIdMappingWorkflow#rule_definition_type}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.rules"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rules EntityresolutionIdMappingWorkflow#rules}.

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules {
    string[] MatchingKeys = null,
    string RuleName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.matchingKeys">MatchingKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#matching_keys EntityresolutionIdMappingWorkflow#matching_keys}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.ruleName">RuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_name EntityresolutionIdMappingWorkflow#rule_name}. |

---

##### `MatchingKeys`<sup>Optional</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.matchingKeys"></a>

```csharp
public string[] MatchingKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#matching_keys EntityresolutionIdMappingWorkflow#matching_keys}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_name EntityresolutionIdMappingWorkflow#rule_name}.

---

### EntityresolutionIdMappingWorkflowInputSourceConfig <a name="EntityresolutionIdMappingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowInputSourceConfig {
    string InputSourceArn,
    string SchemaArn = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.inputSourceArn">InputSourceArn</a></code> | <code>string</code> | An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.schemaArn">SchemaArn</a></code> | <code>string</code> | The SchemaMapping arn associated with the Schema. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#type EntityresolutionIdMappingWorkflow#type}. |

---

##### `InputSourceArn`<sup>Required</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.inputSourceArn"></a>

```csharp
public string InputSourceArn { get; set; }
```

- *Type:* string

An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#input_source_arn EntityresolutionIdMappingWorkflow#input_source_arn}

---

##### `SchemaArn`<sup>Optional</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.schemaArn"></a>

```csharp
public string SchemaArn { get; set; }
```

- *Type:* string

The SchemaMapping arn associated with the Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#schema_arn EntityresolutionIdMappingWorkflow#schema_arn}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#type EntityresolutionIdMappingWorkflow#type}.

---

### EntityresolutionIdMappingWorkflowOutputSourceConfig <a name="EntityresolutionIdMappingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowOutputSourceConfig {
    string KmsArn = null,
    string OutputS3Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.kmsArn">KmsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#kms_arn EntityresolutionIdMappingWorkflow#kms_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.outputS3Path">OutputS3Path</a></code> | <code>string</code> | The S3 path to which Entity Resolution will write the output table. |

---

##### `KmsArn`<sup>Optional</sup> <a name="KmsArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.kmsArn"></a>

```csharp
public string KmsArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#kms_arn EntityresolutionIdMappingWorkflow#kms_arn}.

---

##### `OutputS3Path`<sup>Optional</sup> <a name="OutputS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.outputS3Path"></a>

```csharp
public string OutputS3Path { get; set; }
```

- *Type:* string

The S3 path to which Entity Resolution will write the output table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#output_s3_path EntityresolutionIdMappingWorkflow#output_s3_path}

---

### EntityresolutionIdMappingWorkflowTags <a name="EntityresolutionIdMappingWorkflowTags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#key EntityresolutionIdMappingWorkflow#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#value EntityresolutionIdMappingWorkflow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resetIncrementalRunType">ResetIncrementalRunType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncrementalRunType` <a name="ResetIncrementalRunType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resetIncrementalRunType"></a>

```csharp
private void ResetIncrementalRunType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunTypeInput">IncrementalRunTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType">IncrementalRunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncrementalRunTypeInput`<sup>Optional</sup> <a name="IncrementalRunTypeInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunTypeInput"></a>

```csharp
public string IncrementalRunTypeInput { get; }
```

- *Type:* string

---

##### `IncrementalRunType`<sup>Required</sup> <a name="IncrementalRunType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```csharp
public string IncrementalRunType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties">PutProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties">PutRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetIdMappingType">ResetIdMappingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetNormalizationVersion">ResetNormalizationVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetProviderProperties">ResetProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetRuleBasedProperties">ResetRuleBasedProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderProperties` <a name="PutProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties"></a>

```csharp
private void PutProviderProperties(EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---

##### `PutRuleBasedProperties` <a name="PutRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties"></a>

```csharp
private void PutRuleBasedProperties(EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---

##### `ResetIdMappingType` <a name="ResetIdMappingType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetIdMappingType"></a>

```csharp
private void ResetIdMappingType()
```

##### `ResetNormalizationVersion` <a name="ResetNormalizationVersion" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetNormalizationVersion"></a>

```csharp
private void ResetNormalizationVersion()
```

##### `ResetProviderProperties` <a name="ResetProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetProviderProperties"></a>

```csharp
private void ResetProviderProperties()
```

##### `ResetRuleBasedProperties` <a name="ResetRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetRuleBasedProperties"></a>

```csharp
private void ResetRuleBasedProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingTypeInput">IdMappingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersionInput">NormalizationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerPropertiesInput">ProviderPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedPropertiesInput">RuleBasedPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType">IdMappingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion">NormalizationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderProperties`<sup>Required</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference ProviderProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a>

---

##### `RuleBasedProperties`<sup>Required</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference RuleBasedProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `IdMappingTypeInput`<sup>Optional</sup> <a name="IdMappingTypeInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingTypeInput"></a>

```csharp
public string IdMappingTypeInput { get; }
```

- *Type:* string

---

##### `NormalizationVersionInput`<sup>Optional</sup> <a name="NormalizationVersionInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersionInput"></a>

```csharp
public string NormalizationVersionInput { get; }
```

- *Type:* string

---

##### `ProviderPropertiesInput`<sup>Optional</sup> <a name="ProviderPropertiesInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerPropertiesInput"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties ProviderPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---

##### `RuleBasedPropertiesInput`<sup>Optional</sup> <a name="RuleBasedPropertiesInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedPropertiesInput"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties RuleBasedPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---

##### `IdMappingType`<sup>Required</sup> <a name="IdMappingType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType"></a>

```csharp
public string IdMappingType { get; }
```

- *Type:* string

---

##### `NormalizationVersion`<sup>Required</sup> <a name="NormalizationVersion" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion"></a>

```csharp
public string NormalizationVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniques InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path">ResetIntermediateS3Path</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntermediateS3Path` <a name="ResetIntermediateS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path"></a>

```csharp
private void ResetIntermediateS3Path()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput">IntermediateS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">IntermediateS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntermediateS3PathInput`<sup>Optional</sup> <a name="IntermediateS3PathInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput"></a>

```csharp
public string IntermediateS3PathInput { get; }
```

- *Type:* string

---

##### `IntermediateS3Path`<sup>Required</sup> <a name="IntermediateS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```csharp
public string IntermediateS3Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration">PutIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration">ResetIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderConfiguration">ResetProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderServiceArn">ResetProviderServiceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIntermediateSourceConfiguration` <a name="PutIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration"></a>

```csharp
private void PutIntermediateSourceConfiguration(EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `ResetIntermediateSourceConfiguration` <a name="ResetIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration"></a>

```csharp
private void ResetIntermediateSourceConfiguration()
```

##### `ResetProviderConfiguration` <a name="ResetProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderConfiguration"></a>

```csharp
private void ResetProviderConfiguration()
```

##### `ResetProviderServiceArn` <a name="ResetProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderServiceArn"></a>

```csharp
private void ResetProviderServiceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">IntermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput">IntermediateSourceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput">ProviderConfigurationInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput">ProviderServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration">ProviderConfiguration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn">ProviderServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntermediateSourceConfiguration`<sup>Required</sup> <a name="IntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference IntermediateSourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `IntermediateSourceConfigurationInput`<sup>Optional</sup> <a name="IntermediateSourceConfigurationInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration IntermediateSourceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `ProviderConfigurationInput`<sup>Optional</sup> <a name="ProviderConfigurationInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProviderConfigurationInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProviderServiceArnInput`<sup>Optional</sup> <a name="ProviderServiceArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput"></a>

```csharp
public string ProviderServiceArnInput { get; }
```

- *Type:* string

---

##### `ProviderConfiguration`<sup>Required</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProviderConfiguration { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProviderServiceArn`<sup>Required</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```csharp
public string ProviderServiceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel">ResetAttributeMatchingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRecordMatchingModel">ResetRecordMatchingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRuleDefinitionType">ResetRuleDefinitionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.putRules"></a>

```csharp
private void PutRules(IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]

---

##### `ResetAttributeMatchingModel` <a name="ResetAttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel"></a>

```csharp
private void ResetAttributeMatchingModel()
```

##### `ResetRecordMatchingModel` <a name="ResetRecordMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRecordMatchingModel"></a>

```csharp
private void ResetRecordMatchingModel()
```

##### `ResetRuleDefinitionType` <a name="ResetRuleDefinitionType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRuleDefinitionType"></a>

```csharp
private void ResetRuleDefinitionType()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput">AttributeMatchingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModelInput">RecordMatchingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypeInput">RuleDefinitionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel">RecordMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType">RuleDefinitionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```csharp
public EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a>

---

##### `AttributeMatchingModelInput`<sup>Optional</sup> <a name="AttributeMatchingModelInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput"></a>

```csharp
public string AttributeMatchingModelInput { get; }
```

- *Type:* string

---

##### `RecordMatchingModelInput`<sup>Optional</sup> <a name="RecordMatchingModelInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModelInput"></a>

```csharp
public string RecordMatchingModelInput { get; }
```

- *Type:* string

---

##### `RuleDefinitionTypeInput`<sup>Optional</sup> <a name="RuleDefinitionTypeInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypeInput"></a>

```csharp
public string RuleDefinitionTypeInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rulesInput"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]

---

##### `AttributeMatchingModel`<sup>Required</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```csharp
public string AttributeMatchingModel { get; }
```

- *Type:* string

---

##### `RecordMatchingModel`<sup>Required</sup> <a name="RecordMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel"></a>

```csharp
public string RecordMatchingModel { get; }
```

- *Type:* string

---

##### `RuleDefinitionType`<sup>Required</sup> <a name="RuleDefinitionType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType"></a>

```csharp
public string RuleDefinitionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get"></a>

```csharp
private EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>[]

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys">ResetMatchingKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchingKeys` <a name="ResetMatchingKeys" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys"></a>

```csharp
private void ResetMatchingKeys()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName"></a>

```csharp
private void ResetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput">MatchingKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">MatchingKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchingKeysInput`<sup>Optional</sup> <a name="MatchingKeysInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput"></a>

```csharp
public string[] MatchingKeysInput { get; }
```

- *Type:* string[]

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `MatchingKeys`<sup>Required</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```csharp
public string[] MatchingKeys { get; }
```

- *Type:* string[]

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>

---


### EntityresolutionIdMappingWorkflowInputSourceConfigList <a name="EntityresolutionIdMappingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowInputSourceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.get"></a>

```csharp
private EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowInputSourceConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>[]

---


### EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference <a name="EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetSchemaArn">ResetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaArn` <a name="ResetSchemaArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetSchemaArn"></a>

```csharp
private void ResetSchemaArn()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput">InputSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArnInput">SchemaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">InputSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn">SchemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputSourceArnInput`<sup>Optional</sup> <a name="InputSourceArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput"></a>

```csharp
public string InputSourceArnInput { get; }
```

- *Type:* string

---

##### `SchemaArnInput`<sup>Optional</sup> <a name="SchemaArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArnInput"></a>

```csharp
public string SchemaArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `InputSourceArn`<sup>Required</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```csharp
public string InputSourceArn { get; }
```

- *Type:* string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```csharp
public string SchemaArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowInputSourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>

---


### EntityresolutionIdMappingWorkflowOutputSourceConfigList <a name="EntityresolutionIdMappingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowOutputSourceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.get"></a>

```csharp
private EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowOutputSourceConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>[]

---


### EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference <a name="EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetKmsArn">ResetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path">ResetOutputS3Path</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsArn` <a name="ResetKmsArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetKmsArn"></a>

```csharp
private void ResetKmsArn()
```

##### `ResetOutputS3Path` <a name="ResetOutputS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path"></a>

```csharp
private void ResetOutputS3Path()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput">KmsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput">OutputS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn">KmsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">OutputS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsArnInput`<sup>Optional</sup> <a name="KmsArnInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput"></a>

```csharp
public string KmsArnInput { get; }
```

- *Type:* string

---

##### `OutputS3PathInput`<sup>Optional</sup> <a name="OutputS3PathInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput"></a>

```csharp
public string OutputS3PathInput { get; }
```

- *Type:* string

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```csharp
public string KmsArn { get; }
```

- *Type:* string

---

##### `OutputS3Path`<sup>Required</sup> <a name="OutputS3Path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```csharp
public string OutputS3Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowOutputSourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>

---


### EntityresolutionIdMappingWorkflowTagsList <a name="EntityresolutionIdMappingWorkflowTagsList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.get"></a>

```csharp
private EntityresolutionIdMappingWorkflowTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>[]

---


### EntityresolutionIdMappingWorkflowTagsOutputReference <a name="EntityresolutionIdMappingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdMappingWorkflowTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdMappingWorkflowTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>

---



