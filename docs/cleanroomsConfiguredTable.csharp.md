# `cleanroomsConfiguredTable` Submodule <a name="`cleanroomsConfiguredTable` Submodule" id="@cdktn/provider-awscc.cleanroomsConfiguredTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsConfiguredTable <a name="CleanroomsConfiguredTable" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table awscc_cleanrooms_configured_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTable(Construct Scope, string Id, CleanroomsConfiguredTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig">CleanroomsConfiguredTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig">CleanroomsConfiguredTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putAnalysisRules">PutAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference">PutTableReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetAnalysisRules">ResetAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetSelectedAnalysisMethods">ResetSelectedAnalysisMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalysisRules` <a name="PutAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putAnalysisRules"></a>

```csharp
private void PutAnalysisRules(IResolvable|CleanroomsConfiguredTableAnalysisRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putAnalysisRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules">CleanroomsConfiguredTableAnalysisRules</a>[]

---

##### `PutTableReference` <a name="PutTableReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference"></a>

```csharp
private void PutTableReference(CleanroomsConfiguredTableTableReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTags"></a>

```csharp
private void PutTags(IResolvable|CleanroomsConfiguredTableTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags">CleanroomsConfiguredTableTags</a>[]

---

##### `ResetAnalysisRules` <a name="ResetAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetAnalysisRules"></a>

```csharp
private void ResetAnalysisRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetSelectedAnalysisMethods` <a name="ResetSelectedAnalysisMethods" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetSelectedAnalysisMethods"></a>

```csharp
private void ResetSelectedAnalysisMethods()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsConfiguredTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsConfiguredTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsConfiguredTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsConfiguredTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsConfiguredTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CleanroomsConfiguredTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsConfiguredTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsConfiguredTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsConfiguredTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisRules">AnalysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList">CleanroomsConfiguredTableAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.configuredTableIdentifier">ConfiguredTableIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReference">TableReference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference">CleanroomsConfiguredTableTableReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList">CleanroomsConfiguredTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumnsInput">AllowedColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethodInput">AnalysisMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisRulesInput">AnalysisRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules">CleanroomsConfiguredTableAnalysisRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.selectedAnalysisMethodsInput">SelectedAnalysisMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReferenceInput">TableReferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags">CleanroomsConfiguredTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumns">AllowedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethod">AnalysisMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.selectedAnalysisMethods">SelectedAnalysisMethods</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnalysisRules`<sup>Required</sup> <a name="AnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisRules"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesList AnalysisRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList">CleanroomsConfiguredTableAnalysisRulesList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfiguredTableIdentifier`<sup>Required</sup> <a name="ConfiguredTableIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.configuredTableIdentifier"></a>

```csharp
public string ConfiguredTableIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TableReference`<sup>Required</sup> <a name="TableReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReference"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceOutputReference TableReference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference">CleanroomsConfiguredTableTableReferenceOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tags"></a>

```csharp
public CleanroomsConfiguredTableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList">CleanroomsConfiguredTableTagsList</a>

---

##### `AllowedColumnsInput`<sup>Optional</sup> <a name="AllowedColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumnsInput"></a>

```csharp
public string[] AllowedColumnsInput { get; }
```

- *Type:* string[]

---

##### `AnalysisMethodInput`<sup>Optional</sup> <a name="AnalysisMethodInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethodInput"></a>

```csharp
public string AnalysisMethodInput { get; }
```

- *Type:* string

---

##### `AnalysisRulesInput`<sup>Optional</sup> <a name="AnalysisRulesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisRulesInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRules[] AnalysisRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules">CleanroomsConfiguredTableAnalysisRules</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SelectedAnalysisMethodsInput`<sup>Optional</sup> <a name="SelectedAnalysisMethodsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.selectedAnalysisMethodsInput"></a>

```csharp
public string[] SelectedAnalysisMethodsInput { get; }
```

- *Type:* string[]

---

##### `TableReferenceInput`<sup>Optional</sup> <a name="TableReferenceInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReferenceInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReference TableReferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags">CleanroomsConfiguredTableTags</a>[]

---

##### `AllowedColumns`<sup>Required</sup> <a name="AllowedColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumns"></a>

```csharp
public string[] AllowedColumns { get; }
```

- *Type:* string[]

---

##### `AnalysisMethod`<sup>Required</sup> <a name="AnalysisMethod" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethod"></a>

```csharp
public string AnalysisMethod { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SelectedAnalysisMethods`<sup>Required</sup> <a name="SelectedAnalysisMethods" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.selectedAnalysisMethods"></a>

```csharp
public string[] SelectedAnalysisMethods { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsConfiguredTableAnalysisRules <a name="CleanroomsConfiguredTableAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRules {
    CleanroomsConfiguredTableAnalysisRulesPolicy Policy = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#policy CleanroomsConfiguredTable#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#type CleanroomsConfiguredTable#type}. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.property.policy"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicy Policy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#policy CleanroomsConfiguredTable#policy}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#type CleanroomsConfiguredTable#type}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicy <a name="CleanroomsConfiguredTableAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicy {
    CleanroomsConfiguredTableAnalysisRulesPolicyV1 V1 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#v1 CleanroomsConfiguredTable#v1}. |

---

##### `V1`<sup>Optional</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy.property.v1"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1 V1 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#v1 CleanroomsConfiguredTable#v1}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1 <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1 {
    CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation Aggregation = null,
    CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom Custom = null,
    CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct List = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.aggregation">Aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#aggregation CleanroomsConfiguredTable#aggregation}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#custom CleanroomsConfiguredTable#custom}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.list">List</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#list CleanroomsConfiguredTable#list}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.aggregation"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation Aggregation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#aggregation CleanroomsConfiguredTable#aggregation}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.custom"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom Custom { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#custom CleanroomsConfiguredTable#custom}.

---

##### `List`<sup>Optional</sup> <a name="List" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.list"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct List { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#list CleanroomsConfiguredTable#list}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation {
    string AdditionalAnalyses = null,
    IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns[] AggregateColumns = null,
    string[] AllowedJoinOperators = null,
    string[] DimensionColumns = null,
    string[] JoinColumns = null,
    string JoinRequired = null,
    IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints[] OutputConstraints = null,
    string[] ScalarFunctions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.aggregateColumns">AggregateColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#aggregate_columns CleanroomsConfiguredTable#aggregate_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_join_operators CleanroomsConfiguredTable#allowed_join_operators}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.dimensionColumns">DimensionColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#dimension_columns CleanroomsConfiguredTable#dimension_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.joinColumns">JoinColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#join_columns CleanroomsConfiguredTable#join_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.joinRequired">JoinRequired</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#join_required CleanroomsConfiguredTable#join_required}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.outputConstraints">OutputConstraints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#output_constraints CleanroomsConfiguredTable#output_constraints}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.scalarFunctions">ScalarFunctions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#scalar_functions CleanroomsConfiguredTable#scalar_functions}. |

---

##### `AdditionalAnalyses`<sup>Optional</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}.

---

##### `AggregateColumns`<sup>Optional</sup> <a name="AggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.aggregateColumns"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns[] AggregateColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#aggregate_columns CleanroomsConfiguredTable#aggregate_columns}.

---

##### `AllowedJoinOperators`<sup>Optional</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.allowedJoinOperators"></a>

```csharp
public string[] AllowedJoinOperators { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_join_operators CleanroomsConfiguredTable#allowed_join_operators}.

---

##### `DimensionColumns`<sup>Optional</sup> <a name="DimensionColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.dimensionColumns"></a>

```csharp
public string[] DimensionColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#dimension_columns CleanroomsConfiguredTable#dimension_columns}.

---

##### `JoinColumns`<sup>Optional</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.joinColumns"></a>

```csharp
public string[] JoinColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#join_columns CleanroomsConfiguredTable#join_columns}.

---

##### `JoinRequired`<sup>Optional</sup> <a name="JoinRequired" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.joinRequired"></a>

```csharp
public string JoinRequired { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#join_required CleanroomsConfiguredTable#join_required}.

---

##### `OutputConstraints`<sup>Optional</sup> <a name="OutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.outputConstraints"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints[] OutputConstraints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#output_constraints CleanroomsConfiguredTable#output_constraints}.

---

##### `ScalarFunctions`<sup>Optional</sup> <a name="ScalarFunctions" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.scalarFunctions"></a>

```csharp
public string[] ScalarFunctions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#scalar_functions CleanroomsConfiguredTable#scalar_functions}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns {
    string[] ColumnNames = null,
    string Function = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#column_names CleanroomsConfiguredTable#column_names}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.property.function">Function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#function CleanroomsConfiguredTable#function}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#column_names CleanroomsConfiguredTable#column_names}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.property.function"></a>

```csharp
public string Function { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#function CleanroomsConfiguredTable#function}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints {
    string ColumnName = null,
    double Minimum = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#column_name CleanroomsConfiguredTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.minimum">Minimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#minimum CleanroomsConfiguredTable#minimum}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#type CleanroomsConfiguredTable#type}. |

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#column_name CleanroomsConfiguredTable#column_name}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#minimum CleanroomsConfiguredTable#minimum}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#type CleanroomsConfiguredTable#type}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom {
    string AdditionalAnalyses = null,
    string[] AllowedAnalyses = null,
    string[] AllowedAnalysisProviders = null,
    CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy DifferentialPrivacy = null,
    string[] DisallowedOutputColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses">AllowedAnalyses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_analyses CleanroomsConfiguredTable#allowed_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders">AllowedAnalysisProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_analysis_providers CleanroomsConfiguredTable#allowed_analysis_providers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy">DifferentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#differential_privacy CleanroomsConfiguredTable#differential_privacy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns">DisallowedOutputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#disallowed_output_columns CleanroomsConfiguredTable#disallowed_output_columns}. |

---

##### `AdditionalAnalyses`<sup>Optional</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}.

---

##### `AllowedAnalyses`<sup>Optional</sup> <a name="AllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses"></a>

```csharp
public string[] AllowedAnalyses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_analyses CleanroomsConfiguredTable#allowed_analyses}.

---

##### `AllowedAnalysisProviders`<sup>Optional</sup> <a name="AllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders"></a>

```csharp
public string[] AllowedAnalysisProviders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_analysis_providers CleanroomsConfiguredTable#allowed_analysis_providers}.

---

##### `DifferentialPrivacy`<sup>Optional</sup> <a name="DifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy DifferentialPrivacy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#differential_privacy CleanroomsConfiguredTable#differential_privacy}.

---

##### `DisallowedOutputColumns`<sup>Optional</sup> <a name="DisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns"></a>

```csharp
public string[] DisallowedOutputColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#disallowed_output_columns CleanroomsConfiguredTable#disallowed_output_columns}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy {
    IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] Columns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns">Columns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#columns CleanroomsConfiguredTable#columns}. |

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] Columns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#columns CleanroomsConfiguredTable#columns}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct {
    string AdditionalAnalyses = null,
    string[] AllowedJoinOperators = null,
    string[] JoinColumns = null,
    string[] ListColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_join_operators CleanroomsConfiguredTable#allowed_join_operators}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.joinColumns">JoinColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#join_columns CleanroomsConfiguredTable#join_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.listColumns">ListColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#list_columns CleanroomsConfiguredTable#list_columns}. |

---

##### `AdditionalAnalyses`<sup>Optional</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}.

---

##### `AllowedJoinOperators`<sup>Optional</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.allowedJoinOperators"></a>

```csharp
public string[] AllowedJoinOperators { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_join_operators CleanroomsConfiguredTable#allowed_join_operators}.

---

##### `JoinColumns`<sup>Optional</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.joinColumns"></a>

```csharp
public string[] JoinColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#join_columns CleanroomsConfiguredTable#join_columns}.

---

##### `ListColumns`<sup>Optional</sup> <a name="ListColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.listColumns"></a>

```csharp
public string[] ListColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#list_columns CleanroomsConfiguredTable#list_columns}.

---

### CleanroomsConfiguredTableConfig <a name="CleanroomsConfiguredTableConfig" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AllowedColumns,
    string AnalysisMethod,
    string Name,
    CleanroomsConfiguredTableTableReference TableReference,
    IResolvable|CleanroomsConfiguredTableAnalysisRules[] AnalysisRules = null,
    string Description = null,
    string[] SelectedAnalysisMethods = null,
    IResolvable|CleanroomsConfiguredTableTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.allowedColumns">AllowedColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisMethod">AnalysisMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tableReference">TableReference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_reference CleanroomsConfiguredTable#table_reference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisRules">AnalysisRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules">CleanroomsConfiguredTableAnalysisRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#analysis_rules CleanroomsConfiguredTable#analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.selectedAnalysisMethods">SelectedAnalysisMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#selected_analysis_methods CleanroomsConfiguredTable#selected_analysis_methods}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags">CleanroomsConfiguredTableTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedColumns`<sup>Required</sup> <a name="AllowedColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.allowedColumns"></a>

```csharp
public string[] AllowedColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}.

---

##### `AnalysisMethod`<sup>Required</sup> <a name="AnalysisMethod" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisMethod"></a>

```csharp
public string AnalysisMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}.

---

##### `TableReference`<sup>Required</sup> <a name="TableReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tableReference"></a>

```csharp
public CleanroomsConfiguredTableTableReference TableReference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_reference CleanroomsConfiguredTable#table_reference}.

---

##### `AnalysisRules`<sup>Optional</sup> <a name="AnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisRules"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRules[] AnalysisRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules">CleanroomsConfiguredTableAnalysisRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#analysis_rules CleanroomsConfiguredTable#analysis_rules}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}.

---

##### `SelectedAnalysisMethods`<sup>Optional</sup> <a name="SelectedAnalysisMethods" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.selectedAnalysisMethods"></a>

```csharp
public string[] SelectedAnalysisMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#selected_analysis_methods CleanroomsConfiguredTable#selected_analysis_methods}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tags"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags">CleanroomsConfiguredTableTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#tags CleanroomsConfiguredTable#tags}

---

### CleanroomsConfiguredTableTableReference <a name="CleanroomsConfiguredTableTableReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReference {
    CleanroomsConfiguredTableTableReferenceAthena Athena = null,
    CleanroomsConfiguredTableTableReferenceGlue Glue = null,
    CleanroomsConfiguredTableTableReferenceSnowflake Snowflake = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.athena">Athena</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#athena CleanroomsConfiguredTable#athena}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.glue">Glue</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#glue CleanroomsConfiguredTable#glue}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#snowflake CleanroomsConfiguredTable#snowflake}. |

---

##### `Athena`<sup>Optional</sup> <a name="Athena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.athena"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceAthena Athena { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#athena CleanroomsConfiguredTable#athena}.

---

##### `Glue`<sup>Optional</sup> <a name="Glue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.glue"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceGlue Glue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#glue CleanroomsConfiguredTable#glue}.

---

##### `Snowflake`<sup>Optional</sup> <a name="Snowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.snowflake"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceSnowflake Snowflake { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#snowflake CleanroomsConfiguredTable#snowflake}.

---

### CleanroomsConfiguredTableTableReferenceAthena <a name="CleanroomsConfiguredTableTableReferenceAthena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceAthena {
    string CatalogName = null,
    string DatabaseName = null,
    string OutputLocation = null,
    string Region = null,
    string TableName = null,
    string WorkGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#catalog_name CleanroomsConfiguredTable#catalog_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.outputLocation">OutputLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#output_location CleanroomsConfiguredTable#output_location}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#region CleanroomsConfiguredTable#region}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.workGroup">WorkGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#work_group CleanroomsConfiguredTable#work_group}. |

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#catalog_name CleanroomsConfiguredTable#catalog_name}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}.

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.outputLocation"></a>

```csharp
public string OutputLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#output_location CleanroomsConfiguredTable#output_location}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#region CleanroomsConfiguredTable#region}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}.

---

##### `WorkGroup`<sup>Optional</sup> <a name="WorkGroup" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.workGroup"></a>

```csharp
public string WorkGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#work_group CleanroomsConfiguredTable#work_group}.

---

### CleanroomsConfiguredTableTableReferenceGlue <a name="CleanroomsConfiguredTableTableReferenceGlue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceGlue {
    string DatabaseName = null,
    string Region = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#region CleanroomsConfiguredTable#region}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#region CleanroomsConfiguredTable#region}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}.

---

### CleanroomsConfiguredTableTableReferenceSnowflake <a name="CleanroomsConfiguredTableTableReferenceSnowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceSnowflake {
    string AccountIdentifier = null,
    string DatabaseName = null,
    string SchemaName = null,
    string SecretArn = null,
    string TableName = null,
    CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema TableSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.accountIdentifier">AccountIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#account_identifier CleanroomsConfiguredTable#account_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#schema_name CleanroomsConfiguredTable#schema_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#secret_arn CleanroomsConfiguredTable#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.tableSchema">TableSchema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_schema CleanroomsConfiguredTable#table_schema}. |

---

##### `AccountIdentifier`<sup>Optional</sup> <a name="AccountIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.accountIdentifier"></a>

```csharp
public string AccountIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#account_identifier CleanroomsConfiguredTable#account_identifier}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#schema_name CleanroomsConfiguredTable#schema_name}.

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#secret_arn CleanroomsConfiguredTable#secret_arn}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}.

---

##### `TableSchema`<sup>Optional</sup> <a name="TableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.tableSchema"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema TableSchema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#table_schema CleanroomsConfiguredTable#table_schema}.

---

### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema {
    IResolvable|CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1[] V1 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema.property.v1">V1</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#v1 CleanroomsConfiguredTable#v1}. |

---

##### `V1`<sup>Optional</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema.property.v1"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1[] V1 { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#v1 CleanroomsConfiguredTable#v1}.

---

### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 {
    string ColumnName = null,
    string ColumnType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#column_name CleanroomsConfiguredTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.property.columnType">ColumnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#column_type CleanroomsConfiguredTable#column_type}. |

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#column_name CleanroomsConfiguredTable#column_name}.

---

##### `ColumnType`<sup>Optional</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.property.columnType"></a>

```csharp
public string ColumnType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#column_type CleanroomsConfiguredTable#column_type}.

---

### CleanroomsConfiguredTableTags <a name="CleanroomsConfiguredTableTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#key CleanroomsConfiguredTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#value CleanroomsConfiguredTable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#key CleanroomsConfiguredTable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_configured_table#value CleanroomsConfiguredTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsConfiguredTableAnalysisRulesList <a name="CleanroomsConfiguredTableAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.get"></a>

```csharp
private CleanroomsConfiguredTableAnalysisRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules">CleanroomsConfiguredTableAnalysisRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules">CleanroomsConfiguredTableAnalysisRules</a>[]

---


### CleanroomsConfiguredTableAnalysisRulesOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.putPolicy"></a>

```csharp
private void PutPolicy(CleanroomsConfiguredTableAnalysisRulesPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a>

---

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.policyInput">PolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules">CleanroomsConfiguredTableAnalysisRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.policy"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference Policy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.policyInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicy PolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules">CleanroomsConfiguredTableAnalysisRules</a>

---


### CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.putV1">PutV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resetV1">ResetV1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutV1` <a name="PutV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.putV1"></a>

```csharp
private void PutV1(CleanroomsConfiguredTableAnalysisRulesPolicyV1 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.putV1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a>

---

##### `ResetV1` <a name="ResetV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resetV1"></a>

```csharp
private void ResetV1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1Input">V1Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `V1`<sup>Required</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference V1 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference</a>

---

##### `V1Input`<sup>Optional</sup> <a name="V1Input" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1 V1Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a>

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.get"></a>

```csharp
private CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a>[]

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resetFunction">ResetFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resetFunction"></a>

```csharp
private void ResetFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.functionInput">FunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.functionInput"></a>

```csharp
public string FunctionInput { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a>

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.get"></a>

```csharp
private CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a>[]

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetColumnName"></a>

```csharp
private void ResetColumnName()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a>

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putAggregateColumns">PutAggregateColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putOutputConstraints">PutOutputConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAdditionalAnalyses">ResetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAggregateColumns">ResetAggregateColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedJoinOperators">ResetAllowedJoinOperators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetDimensionColumns">ResetDimensionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetJoinColumns">ResetJoinColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetJoinRequired">ResetJoinRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetOutputConstraints">ResetOutputConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetScalarFunctions">ResetScalarFunctions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregateColumns` <a name="PutAggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putAggregateColumns"></a>

```csharp
private void PutAggregateColumns(IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putAggregateColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a>[]

---

##### `PutOutputConstraints` <a name="PutOutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putOutputConstraints"></a>

```csharp
private void PutOutputConstraints(IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putOutputConstraints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a>[]

---

##### `ResetAdditionalAnalyses` <a name="ResetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAdditionalAnalyses"></a>

```csharp
private void ResetAdditionalAnalyses()
```

##### `ResetAggregateColumns` <a name="ResetAggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAggregateColumns"></a>

```csharp
private void ResetAggregateColumns()
```

##### `ResetAllowedJoinOperators` <a name="ResetAllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedJoinOperators"></a>

```csharp
private void ResetAllowedJoinOperators()
```

##### `ResetDimensionColumns` <a name="ResetDimensionColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetDimensionColumns"></a>

```csharp
private void ResetDimensionColumns()
```

##### `ResetJoinColumns` <a name="ResetJoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetJoinColumns"></a>

```csharp
private void ResetJoinColumns()
```

##### `ResetJoinRequired` <a name="ResetJoinRequired" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetJoinRequired"></a>

```csharp
private void ResetJoinRequired()
```

##### `ResetOutputConstraints` <a name="ResetOutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetOutputConstraints"></a>

```csharp
private void ResetOutputConstraints()
```

##### `ResetScalarFunctions` <a name="ResetScalarFunctions" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetScalarFunctions"></a>

```csharp
private void ResetScalarFunctions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumns">AggregateColumns</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraints">OutputConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalysesInput">AdditionalAnalysesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumnsInput">AggregateColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperatorsInput">AllowedJoinOperatorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumnsInput">DimensionColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumnsInput">JoinColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequiredInput">JoinRequiredInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraintsInput">OutputConstraintsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctionsInput">ScalarFunctionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumns">DimensionColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumns">JoinColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequired">JoinRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctions">ScalarFunctions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregateColumns`<sup>Required</sup> <a name="AggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumns"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList AggregateColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList</a>

---

##### `OutputConstraints`<sup>Required</sup> <a name="OutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraints"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList OutputConstraints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList</a>

---

##### `AdditionalAnalysesInput`<sup>Optional</sup> <a name="AdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalysesInput"></a>

```csharp
public string AdditionalAnalysesInput { get; }
```

- *Type:* string

---

##### `AggregateColumnsInput`<sup>Optional</sup> <a name="AggregateColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumnsInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns[] AggregateColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a>[]

---

##### `AllowedJoinOperatorsInput`<sup>Optional</sup> <a name="AllowedJoinOperatorsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperatorsInput"></a>

```csharp
public string[] AllowedJoinOperatorsInput { get; }
```

- *Type:* string[]

---

##### `DimensionColumnsInput`<sup>Optional</sup> <a name="DimensionColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumnsInput"></a>

```csharp
public string[] DimensionColumnsInput { get; }
```

- *Type:* string[]

---

##### `JoinColumnsInput`<sup>Optional</sup> <a name="JoinColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumnsInput"></a>

```csharp
public string[] JoinColumnsInput { get; }
```

- *Type:* string[]

---

##### `JoinRequiredInput`<sup>Optional</sup> <a name="JoinRequiredInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequiredInput"></a>

```csharp
public string JoinRequiredInput { get; }
```

- *Type:* string

---

##### `OutputConstraintsInput`<sup>Optional</sup> <a name="OutputConstraintsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraintsInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints[] OutputConstraintsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a>[]

---

##### `ScalarFunctionsInput`<sup>Optional</sup> <a name="ScalarFunctionsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctionsInput"></a>

```csharp
public string[] ScalarFunctionsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; }
```

- *Type:* string

---

##### `AllowedJoinOperators`<sup>Required</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperators"></a>

```csharp
public string[] AllowedJoinOperators { get; }
```

- *Type:* string[]

---

##### `DimensionColumns`<sup>Required</sup> <a name="DimensionColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumns"></a>

```csharp
public string[] DimensionColumns { get; }
```

- *Type:* string[]

---

##### `JoinColumns`<sup>Required</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumns"></a>

```csharp
public string[] JoinColumns { get; }
```

- *Type:* string[]

---

##### `JoinRequired`<sup>Required</sup> <a name="JoinRequired" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequired"></a>

```csharp
public string JoinRequired { get; }
```

- *Type:* string

---

##### `ScalarFunctions`<sup>Required</sup> <a name="ScalarFunctions" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctions"></a>

```csharp
public string[] ScalarFunctions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a>

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get"></a>

```csharp
private CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns"></a>

```csharp
private void PutColumns(IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

---

##### `ResetColumns` <a name="ResetColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns"></a>

```csharp
private void ResetColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns[] ColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy">PutDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses">ResetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses">ResetAllowedAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders">ResetAllowedAnalysisProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy">ResetDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns">ResetDisallowedOutputColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDifferentialPrivacy` <a name="PutDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy"></a>

```csharp
private void PutDifferentialPrivacy(CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `ResetAdditionalAnalyses` <a name="ResetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses"></a>

```csharp
private void ResetAdditionalAnalyses()
```

##### `ResetAllowedAnalyses` <a name="ResetAllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses"></a>

```csharp
private void ResetAllowedAnalyses()
```

##### `ResetAllowedAnalysisProviders` <a name="ResetAllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders"></a>

```csharp
private void ResetAllowedAnalysisProviders()
```

##### `ResetDifferentialPrivacy` <a name="ResetDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy"></a>

```csharp
private void ResetDifferentialPrivacy()
```

##### `ResetDisallowedOutputColumns` <a name="ResetDisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns"></a>

```csharp
private void ResetDisallowedOutputColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy">DifferentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput">AdditionalAnalysesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput">AllowedAnalysesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput">AllowedAnalysisProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput">DifferentialPrivacyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput">DisallowedOutputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses">AllowedAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders">AllowedAnalysisProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns">DisallowedOutputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DifferentialPrivacy`<sup>Required</sup> <a name="DifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference DifferentialPrivacy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a>

---

##### `AdditionalAnalysesInput`<sup>Optional</sup> <a name="AdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput"></a>

```csharp
public string AdditionalAnalysesInput { get; }
```

- *Type:* string

---

##### `AllowedAnalysesInput`<sup>Optional</sup> <a name="AllowedAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput"></a>

```csharp
public string[] AllowedAnalysesInput { get; }
```

- *Type:* string[]

---

##### `AllowedAnalysisProvidersInput`<sup>Optional</sup> <a name="AllowedAnalysisProvidersInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput"></a>

```csharp
public string[] AllowedAnalysisProvidersInput { get; }
```

- *Type:* string[]

---

##### `DifferentialPrivacyInput`<sup>Optional</sup> <a name="DifferentialPrivacyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy DifferentialPrivacyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `DisallowedOutputColumnsInput`<sup>Optional</sup> <a name="DisallowedOutputColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput"></a>

```csharp
public string[] DisallowedOutputColumnsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; }
```

- *Type:* string

---

##### `AllowedAnalyses`<sup>Required</sup> <a name="AllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses"></a>

```csharp
public string[] AllowedAnalyses { get; }
```

- *Type:* string[]

---

##### `AllowedAnalysisProviders`<sup>Required</sup> <a name="AllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders"></a>

```csharp
public string[] AllowedAnalysisProviders { get; }
```

- *Type:* string[]

---

##### `DisallowedOutputColumns`<sup>Required</sup> <a name="DisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns"></a>

```csharp
public string[] DisallowedOutputColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a>

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetAdditionalAnalyses">ResetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedJoinOperators">ResetAllowedJoinOperators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetJoinColumns">ResetJoinColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetListColumns">ResetListColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalAnalyses` <a name="ResetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetAdditionalAnalyses"></a>

```csharp
private void ResetAdditionalAnalyses()
```

##### `ResetAllowedJoinOperators` <a name="ResetAllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedJoinOperators"></a>

```csharp
private void ResetAllowedJoinOperators()
```

##### `ResetJoinColumns` <a name="ResetJoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetJoinColumns"></a>

```csharp
private void ResetJoinColumns()
```

##### `ResetListColumns` <a name="ResetListColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetListColumns"></a>

```csharp
private void ResetListColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalysesInput">AdditionalAnalysesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperatorsInput">AllowedJoinOperatorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumnsInput">JoinColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumnsInput">ListColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumns">JoinColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumns">ListColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalAnalysesInput`<sup>Optional</sup> <a name="AdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalysesInput"></a>

```csharp
public string AdditionalAnalysesInput { get; }
```

- *Type:* string

---

##### `AllowedJoinOperatorsInput`<sup>Optional</sup> <a name="AllowedJoinOperatorsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperatorsInput"></a>

```csharp
public string[] AllowedJoinOperatorsInput { get; }
```

- *Type:* string[]

---

##### `JoinColumnsInput`<sup>Optional</sup> <a name="JoinColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumnsInput"></a>

```csharp
public string[] JoinColumnsInput { get; }
```

- *Type:* string[]

---

##### `ListColumnsInput`<sup>Optional</sup> <a name="ListColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumnsInput"></a>

```csharp
public string[] ListColumnsInput { get; }
```

- *Type:* string[]

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; }
```

- *Type:* string

---

##### `AllowedJoinOperators`<sup>Required</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperators"></a>

```csharp
public string[] AllowedJoinOperators { get; }
```

- *Type:* string[]

---

##### `JoinColumns`<sup>Required</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumns"></a>

```csharp
public string[] JoinColumns { get; }
```

- *Type:* string[]

---

##### `ListColumns`<sup>Required</sup> <a name="ListColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumns"></a>

```csharp
public string[] ListColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a>

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putAggregation">PutAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putList">PutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetList">ResetList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregation` <a name="PutAggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putAggregation"></a>

```csharp
private void PutAggregation(CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putAggregation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```csharp
private void PutCustom(CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a>

---

##### `PutList` <a name="PutList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putList"></a>

```csharp
private void PutList(CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a>

---

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetAggregation"></a>

```csharp
private void ResetAggregation()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetList` <a name="ResetList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetList"></a>

```csharp
private void ResetList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregation">Aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.list">List</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregationInput">AggregationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.customInput">CustomInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.listInput">ListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregation"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference Aggregation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.list"></a>

```csharp
public CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference List { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference</a>

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregationInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation AggregationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom CustomInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a>

---

##### `ListInput`<sup>Optional</sup> <a name="ListInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.listInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct ListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableAnalysisRulesPolicyV1 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a>

---


### CleanroomsConfiguredTableTableReferenceAthenaOutputReference <a name="CleanroomsConfiguredTableTableReferenceAthenaOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceAthenaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetWorkGroup">ResetWorkGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetOutputLocation"></a>

```csharp
private void ResetOutputLocation()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetWorkGroup` <a name="ResetWorkGroup" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetWorkGroup"></a>

```csharp
private void ResetWorkGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocationInput">OutputLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroupInput">WorkGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocation">OutputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroup">WorkGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocationInput"></a>

```csharp
public string OutputLocationInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `WorkGroupInput`<sup>Optional</sup> <a name="WorkGroupInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroupInput"></a>

```csharp
public string WorkGroupInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocation"></a>

```csharp
public string OutputLocation { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `WorkGroup`<sup>Required</sup> <a name="WorkGroup" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroup"></a>

```csharp
public string WorkGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceAthena InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a>

---


### CleanroomsConfiguredTableTableReferenceGlueOutputReference <a name="CleanroomsConfiguredTableTableReferenceGlueOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceGlueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceGlue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a>

---


### CleanroomsConfiguredTableTableReferenceOutputReference <a name="CleanroomsConfiguredTableTableReferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putAthena">PutAthena</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putGlue">PutGlue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putSnowflake">PutSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetAthena">ResetAthena</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetGlue">ResetGlue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetSnowflake">ResetSnowflake</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAthena` <a name="PutAthena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putAthena"></a>

```csharp
private void PutAthena(CleanroomsConfiguredTableTableReferenceAthena Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putAthena.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a>

---

##### `PutGlue` <a name="PutGlue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putGlue"></a>

```csharp
private void PutGlue(CleanroomsConfiguredTableTableReferenceGlue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putGlue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a>

---

##### `PutSnowflake` <a name="PutSnowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putSnowflake"></a>

```csharp
private void PutSnowflake(CleanroomsConfiguredTableTableReferenceSnowflake Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putSnowflake.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a>

---

##### `ResetAthena` <a name="ResetAthena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetAthena"></a>

```csharp
private void ResetAthena()
```

##### `ResetGlue` <a name="ResetGlue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetGlue"></a>

```csharp
private void ResetGlue()
```

##### `ResetSnowflake` <a name="ResetSnowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetSnowflake"></a>

```csharp
private void ResetSnowflake()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.athena">Athena</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference">CleanroomsConfiguredTableTableReferenceAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.glue">Glue</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference">CleanroomsConfiguredTableTableReferenceGlueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference">CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.athenaInput">AthenaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.glueInput">GlueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.snowflakeInput">SnowflakeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Athena`<sup>Required</sup> <a name="Athena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.athena"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceAthenaOutputReference Athena { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference">CleanroomsConfiguredTableTableReferenceAthenaOutputReference</a>

---

##### `Glue`<sup>Required</sup> <a name="Glue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.glue"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceGlueOutputReference Glue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference">CleanroomsConfiguredTableTableReferenceGlueOutputReference</a>

---

##### `Snowflake`<sup>Required</sup> <a name="Snowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.snowflake"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference Snowflake { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference">CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference</a>

---

##### `AthenaInput`<sup>Optional</sup> <a name="AthenaInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.athenaInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceAthena AthenaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a>

---

##### `GlueInput`<sup>Optional</sup> <a name="GlueInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.glueInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceGlue GlueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a>

---

##### `SnowflakeInput`<sup>Optional</sup> <a name="SnowflakeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.snowflakeInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceSnowflake SnowflakeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

---


### CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference <a name="CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.putTableSchema">PutTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetAccountIdentifier">ResetAccountIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetTableSchema">ResetTableSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTableSchema` <a name="PutTableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.putTableSchema"></a>

```csharp
private void PutTableSchema(CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.putTableSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a>

---

##### `ResetAccountIdentifier` <a name="ResetAccountIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetAccountIdentifier"></a>

```csharp
private void ResetAccountIdentifier()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTableSchema` <a name="ResetTableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetTableSchema"></a>

```csharp
private void ResetTableSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchema">TableSchema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifierInput">AccountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchemaInput">TableSchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifier">AccountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TableSchema`<sup>Required</sup> <a name="TableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchema"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference TableSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference</a>

---

##### `AccountIdentifierInput`<sup>Optional</sup> <a name="AccountIdentifierInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifierInput"></a>

```csharp
public string AccountIdentifierInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TableSchemaInput`<sup>Optional</sup> <a name="TableSchemaInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchemaInput"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema TableSchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a>

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifier"></a>

```csharp
public string AccountIdentifier { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceSnowflake InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a>

---


### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.putV1">PutV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resetV1">ResetV1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutV1` <a name="PutV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.putV1"></a>

```csharp
private void PutV1(IResolvable|CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.putV1.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a>[]

---

##### `ResetV1` <a name="ResetV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resetV1"></a>

```csharp
private void ResetV1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1Input">V1Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `V1`<sup>Required</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1"></a>

```csharp
public CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List V1 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List</a>

---

##### `V1Input`<sup>Optional</sup> <a name="V1Input" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1Input"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1[] V1Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a>

---


### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.get"></a>

```csharp
private CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a>[]

---


### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resetColumnType">ResetColumnType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resetColumnName"></a>

```csharp
private void ResetColumnName()
```

##### `ResetColumnType` <a name="ResetColumnType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resetColumnType"></a>

```csharp
private void ResetColumnType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnType">ColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnTypeInput"></a>

```csharp
public string ColumnTypeInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnType"></a>

```csharp
public string ColumnType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a>

---


### CleanroomsConfiguredTableTagsList <a name="CleanroomsConfiguredTableTagsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.get"></a>

```csharp
private CleanroomsConfiguredTableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags">CleanroomsConfiguredTableTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags">CleanroomsConfiguredTableTags</a>[]

---


### CleanroomsConfiguredTableTagsOutputReference <a name="CleanroomsConfiguredTableTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsConfiguredTableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags">CleanroomsConfiguredTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsConfiguredTableTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags">CleanroomsConfiguredTableTags</a>

---



