# `cleanroomsIntermediateTable` Submodule <a name="`cleanroomsIntermediateTable` Submodule" id="@cdktn/provider-awscc.cleanroomsIntermediateTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsIntermediateTable <a name="CleanroomsIntermediateTable" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table awscc_cleanrooms_intermediate_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTable(Construct Scope, string Id, CleanroomsIntermediateTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig">CleanroomsIntermediateTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig">CleanroomsIntermediateTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules">PutAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration">PutPopulationAnalysisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules">ResetAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalysisRules` <a name="PutAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules"></a>

```csharp
private void PutAnalysisRules(IResolvable|CleanroomsIntermediateTableAnalysisRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]

---

##### `PutPopulationAnalysisConfiguration` <a name="PutPopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration"></a>

```csharp
private void PutPopulationAnalysisConfiguration(CleanroomsIntermediateTablePopulationAnalysisConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags"></a>

```csharp
private void PutTags(IResolvable|CleanroomsIntermediateTableTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]

---

##### `ResetAnalysisRules` <a name="ResetAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules"></a>

```csharp
private void ResetAnalysisRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsIntermediateTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsIntermediateTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsIntermediateTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsIntermediateTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsIntermediateTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsIntermediateTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsIntermediateTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules">AnalysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn">CollaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier">IntermediateTableIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn">MembershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration">PopulationAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput">AnalysisRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput">MembershipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput">PopulationAnalysisConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnalysisRules`<sup>Required</sup> <a name="AnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesList AnalysisRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn"></a>

```csharp
public string CollaborationArn { get; }
```

- *Type:* string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier"></a>

```csharp
public string CollaborationIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntermediateTableIdentifier`<sup>Required</sup> <a name="IntermediateTableIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier"></a>

```csharp
public string IntermediateTableIdentifier { get; }
```

- *Type:* string

---

##### `MembershipArn`<sup>Required</sup> <a name="MembershipArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn"></a>

```csharp
public string MembershipArn { get; }
```

- *Type:* string

---

##### `PopulationAnalysisConfiguration`<sup>Required</sup> <a name="PopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration"></a>

```csharp
public CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference PopulationAnalysisConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags"></a>

```csharp
public CleanroomsIntermediateTableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a>

---

##### `AnalysisRulesInput`<sup>Optional</sup> <a name="AnalysisRulesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRules[] AnalysisRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `MembershipIdentifierInput`<sup>Optional</sup> <a name="MembershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput"></a>

```csharp
public string MembershipIdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PopulationAnalysisConfigurationInput`<sup>Optional</sup> <a name="PopulationAnalysisConfigurationInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput"></a>

```csharp
public IResolvable|CleanroomsIntermediateTablePopulationAnalysisConfiguration PopulationAnalysisConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsIntermediateTableAnalysisRules <a name="CleanroomsIntermediateTableAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRules {
    CleanroomsIntermediateTableAnalysisRulesPolicy Policy = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesPolicy Policy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicy <a name="CleanroomsIntermediateTableAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicy {
    CleanroomsIntermediateTableAnalysisRulesPolicyV1 V1 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}. |

---

##### `V1`<sup>Optional</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesPolicyV1 V1 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1 <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1 {
    CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom Custom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}. |

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom Custom { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom {
    string AdditionalAnalyses = null,
    string[] AllowedAnalyses = null,
    string[] AllowedAnalysisProviders = null,
    string[] AllowedResultReceivers = null,
    CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy DifferentialPrivacy = null,
    string[] DisallowedOutputColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses">AllowedAnalyses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders">AllowedAnalysisProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy">DifferentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns">DisallowedOutputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}. |

---

##### `AdditionalAnalyses`<sup>Optional</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}.

---

##### `AllowedAnalyses`<sup>Optional</sup> <a name="AllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses"></a>

```csharp
public string[] AllowedAnalyses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}.

---

##### `AllowedAnalysisProviders`<sup>Optional</sup> <a name="AllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders"></a>

```csharp
public string[] AllowedAnalysisProviders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}.

---

##### `AllowedResultReceivers`<sup>Optional</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers"></a>

```csharp
public string[] AllowedResultReceivers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}.

---

##### `DifferentialPrivacy`<sup>Optional</sup> <a name="DifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy DifferentialPrivacy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}.

---

##### `DisallowedOutputColumns`<sup>Optional</sup> <a name="DisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns"></a>

```csharp
public string[] DisallowedOutputColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy {
    IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] Columns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns">Columns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}. |

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] Columns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

### CleanroomsIntermediateTableConfig <a name="CleanroomsIntermediateTableConfig" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MembershipIdentifier,
    string Name,
    CleanroomsIntermediateTablePopulationAnalysisConfiguration PopulationAnalysisConfiguration,
    IResolvable|CleanroomsIntermediateTableAnalysisRules[] AnalysisRules = null,
    string Description = null,
    string KmsKeyArn = null,
    IResolvable|CleanroomsIntermediateTableTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration">PopulationAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules">AnalysisRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

##### `PopulationAnalysisConfiguration`<sup>Required</sup> <a name="PopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration"></a>

```csharp
public CleanroomsIntermediateTablePopulationAnalysisConfiguration PopulationAnalysisConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}.

---

##### `AnalysisRules`<sup>Optional</sup> <a name="AnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRules[] AnalysisRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfiguration <a name="CleanroomsIntermediateTablePopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTablePopulationAnalysisConfiguration {
    CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters SqlParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters">SqlParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}. |

---

##### `SqlParameters`<sup>Optional</sup> <a name="SqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters"></a>

```csharp
public CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters SqlParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters {
    string AnalysisTemplateArn = null,
    string QueryString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn">AnalysisTemplateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString">QueryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}. |

---

##### `AnalysisTemplateArn`<sup>Optional</sup> <a name="AnalysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn"></a>

```csharp
public string AnalysisTemplateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}.

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString"></a>

```csharp
public string QueryString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}.

---

### CleanroomsIntermediateTableTags <a name="CleanroomsIntermediateTableTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsIntermediateTableAnalysisRulesList <a name="CleanroomsIntermediateTableAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get"></a>

```csharp
private CleanroomsIntermediateTableAnalysisRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>[]

---


### CleanroomsIntermediateTableAnalysisRulesOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy"></a>

```csharp
private void PutPolicy(CleanroomsIntermediateTableAnalysisRulesPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput">PolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference Policy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicy PolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1">PutV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1">ResetV1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutV1` <a name="PutV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1"></a>

```csharp
private void PutV1(CleanroomsIntermediateTableAnalysisRulesPolicyV1 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---

##### `ResetV1` <a name="ResetV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1"></a>

```csharp
private void ResetV1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input">V1Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `V1`<sup>Required</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference V1 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a>

---

##### `V1Input`<sup>Optional</sup> <a name="V1Input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1 V1Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get"></a>

```csharp
private CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns"></a>

```csharp
private void PutColumns(IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

---

##### `ResetColumns` <a name="ResetColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns"></a>

```csharp
private void ResetColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] ColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy">PutDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses">ResetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses">ResetAllowedAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders">ResetAllowedAnalysisProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers">ResetAllowedResultReceivers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy">ResetDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns">ResetDisallowedOutputColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDifferentialPrivacy` <a name="PutDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy"></a>

```csharp
private void PutDifferentialPrivacy(CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `ResetAdditionalAnalyses` <a name="ResetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses"></a>

```csharp
private void ResetAdditionalAnalyses()
```

##### `ResetAllowedAnalyses` <a name="ResetAllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses"></a>

```csharp
private void ResetAllowedAnalyses()
```

##### `ResetAllowedAnalysisProviders` <a name="ResetAllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders"></a>

```csharp
private void ResetAllowedAnalysisProviders()
```

##### `ResetAllowedResultReceivers` <a name="ResetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers"></a>

```csharp
private void ResetAllowedResultReceivers()
```

##### `ResetDifferentialPrivacy` <a name="ResetDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy"></a>

```csharp
private void ResetDifferentialPrivacy()
```

##### `ResetDisallowedOutputColumns` <a name="ResetDisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns"></a>

```csharp
private void ResetDisallowedOutputColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy">DifferentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput">AdditionalAnalysesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput">AllowedAnalysesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput">AllowedAnalysisProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput">AllowedResultReceiversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput">DifferentialPrivacyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput">DisallowedOutputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses">AllowedAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders">AllowedAnalysisProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns">DisallowedOutputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DifferentialPrivacy`<sup>Required</sup> <a name="DifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference DifferentialPrivacy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a>

---

##### `AdditionalAnalysesInput`<sup>Optional</sup> <a name="AdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput"></a>

```csharp
public string AdditionalAnalysesInput { get; }
```

- *Type:* string

---

##### `AllowedAnalysesInput`<sup>Optional</sup> <a name="AllowedAnalysesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput"></a>

```csharp
public string[] AllowedAnalysesInput { get; }
```

- *Type:* string[]

---

##### `AllowedAnalysisProvidersInput`<sup>Optional</sup> <a name="AllowedAnalysisProvidersInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput"></a>

```csharp
public string[] AllowedAnalysisProvidersInput { get; }
```

- *Type:* string[]

---

##### `AllowedResultReceiversInput`<sup>Optional</sup> <a name="AllowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput"></a>

```csharp
public string[] AllowedResultReceiversInput { get; }
```

- *Type:* string[]

---

##### `DifferentialPrivacyInput`<sup>Optional</sup> <a name="DifferentialPrivacyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy DifferentialPrivacyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `DisallowedOutputColumnsInput`<sup>Optional</sup> <a name="DisallowedOutputColumnsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput"></a>

```csharp
public string[] DisallowedOutputColumnsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; }
```

- *Type:* string

---

##### `AllowedAnalyses`<sup>Required</sup> <a name="AllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses"></a>

```csharp
public string[] AllowedAnalyses { get; }
```

- *Type:* string[]

---

##### `AllowedAnalysisProviders`<sup>Required</sup> <a name="AllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders"></a>

```csharp
public string[] AllowedAnalysisProviders { get; }
```

- *Type:* string[]

---

##### `AllowedResultReceivers`<sup>Required</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```csharp
public string[] AllowedResultReceivers { get; }
```

- *Type:* string[]

---

##### `DisallowedOutputColumns`<sup>Required</sup> <a name="DisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns"></a>

```csharp
public string[] DisallowedOutputColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom">ResetCustom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```csharp
private void PutCustom(CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput">CustomInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```csharp
public CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom CustomInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters">PutSqlParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters">ResetSqlParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSqlParameters` <a name="PutSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters"></a>

```csharp
private void PutSqlParameters(CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---

##### `ResetSqlParameters` <a name="ResetSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters"></a>

```csharp
private void ResetSqlParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters">SqlParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput">SqlParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlParameters`<sup>Required</sup> <a name="SqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters"></a>

```csharp
public CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference SqlParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a>

---

##### `SqlParametersInput`<sup>Optional</sup> <a name="SqlParametersInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput"></a>

```csharp
public IResolvable|CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters SqlParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTablePopulationAnalysisConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn">ResetAnalysisTemplateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalysisTemplateArn` <a name="ResetAnalysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn"></a>

```csharp
private void ResetAnalysisTemplateArn()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString"></a>

```csharp
private void ResetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput">AnalysisTemplateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn">AnalysisTemplateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString">QueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnalysisTemplateArnInput`<sup>Optional</sup> <a name="AnalysisTemplateArnInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput"></a>

```csharp
public string AnalysisTemplateArnInput { get; }
```

- *Type:* string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput"></a>

```csharp
public string QueryStringInput { get; }
```

- *Type:* string

---

##### `AnalysisTemplateArn`<sup>Required</sup> <a name="AnalysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn"></a>

```csharp
public string AnalysisTemplateArn { get; }
```

- *Type:* string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString"></a>

```csharp
public string QueryString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---


### CleanroomsIntermediateTableTagsList <a name="CleanroomsIntermediateTableTagsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get"></a>

```csharp
private CleanroomsIntermediateTableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>[]

---


### CleanroomsIntermediateTableTagsOutputReference <a name="CleanroomsIntermediateTableTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIntermediateTableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIntermediateTableTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>

---



