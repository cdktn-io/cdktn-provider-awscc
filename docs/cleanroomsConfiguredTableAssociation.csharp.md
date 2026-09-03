# `cleanroomsConfiguredTableAssociation` Submodule <a name="`cleanroomsConfiguredTableAssociation` Submodule" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsConfiguredTableAssociation <a name="CleanroomsConfiguredTableAssociation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association awscc_cleanrooms_configured_table_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociation(Construct Scope, string Id, CleanroomsConfiguredTableAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig">CleanroomsConfiguredTableAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig">CleanroomsConfiguredTableAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putConfiguredTableAssociationAnalysisRules">PutConfiguredTableAssociationAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetConfiguredTableAssociationAnalysisRules">ResetConfiguredTableAssociationAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguredTableAssociationAnalysisRules` <a name="PutConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putConfiguredTableAssociationAnalysisRules"></a>

```csharp
private void PutConfiguredTableAssociationAnalysisRules(IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putConfiguredTableAssociationAnalysisRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|CleanroomsConfiguredTableAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>[]

---

##### `ResetConfiguredTableAssociationAnalysisRules` <a name="ResetConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetConfiguredTableAssociationAnalysisRules"></a>

```csharp
private void ResetConfiguredTableAssociationAnalysisRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsConfiguredTableAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsConfiguredTableAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsConfiguredTableAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsConfiguredTableAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsConfiguredTableAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsConfiguredTableAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsConfiguredTableAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules">ConfiguredTableAssociationAnalysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier">ConfiguredTableAssociationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList">CleanroomsConfiguredTableAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRulesInput">ConfiguredTableAssociationAnalysisRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifierInput">ConfiguredTableIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifierInput">MembershipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifier">ConfiguredTableIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfiguredTableAssociationAnalysisRules`<sup>Required</sup> <a name="ConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList ConfiguredTableAssociationAnalysisRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a>

---

##### `ConfiguredTableAssociationIdentifier`<sup>Required</sup> <a name="ConfiguredTableAssociationIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier"></a>

```csharp
public string ConfiguredTableAssociationIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tags"></a>

```csharp
public CleanroomsConfiguredTableAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList">CleanroomsConfiguredTableAssociationTagsList</a>

---

##### `ConfiguredTableAssociationAnalysisRulesInput`<sup>Optional</sup> <a name="ConfiguredTableAssociationAnalysisRulesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRulesInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules[] ConfiguredTableAssociationAnalysisRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>[]

---

##### `ConfiguredTableIdentifierInput`<sup>Optional</sup> <a name="ConfiguredTableIdentifierInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifierInput"></a>

```csharp
public string ConfiguredTableIdentifierInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MembershipIdentifierInput`<sup>Optional</sup> <a name="MembershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifierInput"></a>

```csharp
public string MembershipIdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tagsInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>[]

---

##### `ConfiguredTableIdentifier`<sup>Required</sup> <a name="ConfiguredTableIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifier"></a>

```csharp
public string ConfiguredTableIdentifier { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsConfiguredTableAssociationConfig <a name="CleanroomsConfiguredTableAssociationConfig" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfiguredTableIdentifier,
    string MembershipIdentifier,
    string Name,
    string RoleArn,
    IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules[] ConfiguredTableAssociationAnalysisRules = null,
    string Description = null,
    IResolvable|CleanroomsConfiguredTableAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableIdentifier">ConfiguredTableIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableAssociationAnalysisRules">ConfiguredTableAssociationAnalysisRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfiguredTableIdentifier`<sup>Required</sup> <a name="ConfiguredTableIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableIdentifier"></a>

```csharp
public string ConfiguredTableIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}.

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}.

---

##### `ConfiguredTableAssociationAnalysisRules`<sup>Optional</sup> <a name="ConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableAssociationAnalysisRules"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules[] ConfiguredTableAssociationAnalysisRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.tags"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#tags CleanroomsConfiguredTableAssociation#tags}

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules {
    CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy Policy = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#policy CleanroomsConfiguredTableAssociation#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#type CleanroomsConfiguredTableAssociation#type}. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.policy"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy Policy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#policy CleanroomsConfiguredTableAssociation#policy}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#type CleanroomsConfiguredTableAssociation#type}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy {
    CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 V1 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#v1 CleanroomsConfiguredTableAssociation#v1}. |

---

##### `V1`<sup>Optional</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.property.v1"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 V1 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#v1 CleanroomsConfiguredTableAssociation#v1}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 {
    CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation Aggregation = null,
    CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom Custom = null,
    CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct List = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.aggregation">Aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#aggregation CleanroomsConfiguredTableAssociation#aggregation}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#custom CleanroomsConfiguredTableAssociation#custom}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.list">List</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#list CleanroomsConfiguredTableAssociation#list}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.aggregation"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation Aggregation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#aggregation CleanroomsConfiguredTableAssociation#aggregation}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.custom"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom Custom { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#custom CleanroomsConfiguredTableAssociation#custom}.

---

##### `List`<sup>Optional</sup> <a name="List" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.list"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct List { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#list CleanroomsConfiguredTableAssociation#list}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation {
    string[] AllowedAdditionalAnalyses = null,
    string[] AllowedResultReceivers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedAdditionalAnalyses">AllowedAdditionalAnalyses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}. |

---

##### `AllowedAdditionalAnalyses`<sup>Optional</sup> <a name="AllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedAdditionalAnalyses"></a>

```csharp
public string[] AllowedAdditionalAnalyses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

##### `AllowedResultReceivers`<sup>Optional</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedResultReceivers"></a>

```csharp
public string[] AllowedResultReceivers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom {
    string[] AllowedAdditionalAnalyses = null,
    string[] AllowedResultReceivers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedAdditionalAnalyses">AllowedAdditionalAnalyses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}. |

---

##### `AllowedAdditionalAnalyses`<sup>Optional</sup> <a name="AllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedAdditionalAnalyses"></a>

```csharp
public string[] AllowedAdditionalAnalyses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

##### `AllowedResultReceivers`<sup>Optional</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedResultReceivers"></a>

```csharp
public string[] AllowedResultReceivers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct {
    string[] AllowedAdditionalAnalyses = null,
    string[] AllowedResultReceivers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedAdditionalAnalyses">AllowedAdditionalAnalyses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}. |

---

##### `AllowedAdditionalAnalyses`<sup>Optional</sup> <a name="AllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedAdditionalAnalyses"></a>

```csharp
public string[] AllowedAdditionalAnalyses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

##### `AllowedResultReceivers`<sup>Optional</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedResultReceivers"></a>

```csharp
public string[] AllowedResultReceivers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

### CleanroomsConfiguredTableAssociationTags <a name="CleanroomsConfiguredTableAssociationTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#key CleanroomsConfiguredTableAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#value CleanroomsConfiguredTableAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#key CleanroomsConfiguredTableAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanrooms_configured_table_association#value CleanroomsConfiguredTableAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get"></a>

```csharp
private CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>[]

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.putPolicy"></a>

```csharp
private void PutPolicy(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policyInput">PolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference Policy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policyInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy PolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1">PutV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resetV1">ResetV1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutV1` <a name="PutV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1"></a>

```csharp
private void PutV1(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---

##### `ResetV1` <a name="ResetV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resetV1"></a>

```csharp
private void ResetV1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1Input">V1Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `V1`<sup>Required</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference V1 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a>

---

##### `V1Input`<sup>Optional</sup> <a name="V1Input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 V1Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedAdditionalAnalyses">ResetAllowedAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedResultReceivers">ResetAllowedResultReceivers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAdditionalAnalyses` <a name="ResetAllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedAdditionalAnalyses"></a>

```csharp
private void ResetAllowedAdditionalAnalyses()
```

##### `ResetAllowedResultReceivers` <a name="ResetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedResultReceivers"></a>

```csharp
private void ResetAllowedResultReceivers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalysesInput">AllowedAdditionalAnalysesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceiversInput">AllowedResultReceiversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses">AllowedAdditionalAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAdditionalAnalysesInput`<sup>Optional</sup> <a name="AllowedAdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalysesInput"></a>

```csharp
public string[] AllowedAdditionalAnalysesInput { get; }
```

- *Type:* string[]

---

##### `AllowedResultReceiversInput`<sup>Optional</sup> <a name="AllowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceiversInput"></a>

```csharp
public string[] AllowedResultReceiversInput { get; }
```

- *Type:* string[]

---

##### `AllowedAdditionalAnalyses`<sup>Required</sup> <a name="AllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses"></a>

```csharp
public string[] AllowedAdditionalAnalyses { get; }
```

- *Type:* string[]

---

##### `AllowedResultReceivers`<sup>Required</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers"></a>

```csharp
public string[] AllowedResultReceivers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAdditionalAnalyses">ResetAllowedAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers">ResetAllowedResultReceivers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAdditionalAnalyses` <a name="ResetAllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAdditionalAnalyses"></a>

```csharp
private void ResetAllowedAdditionalAnalyses()
```

##### `ResetAllowedResultReceivers` <a name="ResetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers"></a>

```csharp
private void ResetAllowedResultReceivers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalysesInput">AllowedAdditionalAnalysesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput">AllowedResultReceiversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses">AllowedAdditionalAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAdditionalAnalysesInput`<sup>Optional</sup> <a name="AllowedAdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalysesInput"></a>

```csharp
public string[] AllowedAdditionalAnalysesInput { get; }
```

- *Type:* string[]

---

##### `AllowedResultReceiversInput`<sup>Optional</sup> <a name="AllowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput"></a>

```csharp
public string[] AllowedResultReceiversInput { get; }
```

- *Type:* string[]

---

##### `AllowedAdditionalAnalyses`<sup>Required</sup> <a name="AllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses"></a>

```csharp
public string[] AllowedAdditionalAnalyses { get; }
```

- *Type:* string[]

---

##### `AllowedResultReceivers`<sup>Required</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```csharp
public string[] AllowedResultReceivers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedAdditionalAnalyses">ResetAllowedAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedResultReceivers">ResetAllowedResultReceivers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAdditionalAnalyses` <a name="ResetAllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedAdditionalAnalyses"></a>

```csharp
private void ResetAllowedAdditionalAnalyses()
```

##### `ResetAllowedResultReceivers` <a name="ResetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedResultReceivers"></a>

```csharp
private void ResetAllowedResultReceivers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalysesInput">AllowedAdditionalAnalysesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceiversInput">AllowedResultReceiversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses">AllowedAdditionalAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAdditionalAnalysesInput`<sup>Optional</sup> <a name="AllowedAdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalysesInput"></a>

```csharp
public string[] AllowedAdditionalAnalysesInput { get; }
```

- *Type:* string[]

---

##### `AllowedResultReceiversInput`<sup>Optional</sup> <a name="AllowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceiversInput"></a>

```csharp
public string[] AllowedResultReceiversInput { get; }
```

- *Type:* string[]

---

##### `AllowedAdditionalAnalyses`<sup>Required</sup> <a name="AllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses"></a>

```csharp
public string[] AllowedAdditionalAnalyses { get; }
```

- *Type:* string[]

---

##### `AllowedResultReceivers`<sup>Required</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers"></a>

```csharp
public string[] AllowedResultReceivers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation">PutAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList">PutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetList">ResetList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregation` <a name="PutAggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation"></a>

```csharp
private void PutAggregation(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```csharp
private void PutCustom(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---

##### `PutList` <a name="PutList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList"></a>

```csharp
private void PutList(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetAggregation"></a>

```csharp
private void ResetAggregation()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetList` <a name="ResetList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetList"></a>

```csharp
private void ResetList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation">Aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list">List</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregationInput">AggregationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.customInput">CustomInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.listInput">ListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference Aggregation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list"></a>

```csharp
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference List { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a>

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregationInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation AggregationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom CustomInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---

##### `ListInput`<sup>Optional</sup> <a name="ListInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.listInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct ListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---


### CleanroomsConfiguredTableAssociationTagsList <a name="CleanroomsConfiguredTableAssociationTagsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.get"></a>

```csharp
private CleanroomsConfiguredTableAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>[]

---


### CleanroomsConfiguredTableAssociationTagsOutputReference <a name="CleanroomsConfiguredTableAssociationTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>

---



