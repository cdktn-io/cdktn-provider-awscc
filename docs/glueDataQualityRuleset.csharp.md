# `glueDataQualityRuleset` Submodule <a name="`glueDataQualityRuleset` Submodule" id="@cdktn/provider-awscc.glueDataQualityRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDataQualityRuleset <a name="GlueDataQualityRuleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset awscc_glue_data_quality_ruleset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueDataQualityRuleset(Construct Scope, string Id, GlueDataQualityRulesetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig">GlueDataQualityRulesetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig">GlueDataQualityRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable">PutTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetRuleset">ResetRuleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable">ResetTargetTable</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetTable` <a name="PutTargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable"></a>

```csharp
private void PutTargetTable(GlueDataQualityRulesetTargetTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetClientToken"></a>

```csharp
private void ResetClientToken()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRuleset` <a name="ResetRuleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetRuleset"></a>

```csharp
private void ResetRuleset()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetTable` <a name="ResetTargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable"></a>

```csharp
private void ResetTargetTable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueDataQualityRuleset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueDataQualityRuleset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueDataQualityRuleset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueDataQualityRuleset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueDataQualityRuleset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueDataQualityRuleset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueDataQualityRuleset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueDataQualityRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueDataQualityRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientTokenInput">ClientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput">RulesetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput">TargetTableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset">Ruleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TargetTable`<sup>Required</sup> <a name="TargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable"></a>

```csharp
public GlueDataQualityRulesetTargetTableOutputReference TargetTable { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a>

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientTokenInput"></a>

```csharp
public string ClientTokenInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RulesetInput`<sup>Optional</sup> <a name="RulesetInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput"></a>

```csharp
public string RulesetInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetTableInput`<sup>Optional</sup> <a name="TargetTableInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput"></a>

```csharp
public IResolvable|GlueDataQualityRulesetTargetTable TargetTableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset"></a>

```csharp
public string Ruleset { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDataQualityRulesetConfig <a name="GlueDataQualityRulesetConfig" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueDataQualityRulesetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ClientToken = null,
    string Description = null,
    string Ruleset = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    GlueDataQualityRulesetTargetTable TargetTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name">Name</a></code> | <code>string</code> | A unique name for the data quality ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.clientToken">ClientToken</a></code> | <code>string</code> | A unique token for idempotency. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description">Description</a></code> | <code>string</code> | A description of the data quality ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset">Ruleset</a></code> | <code>string</code> | A Data Quality Definition Language (DQDL) ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | An object representing an AWS Glue table. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique name for the data quality ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.clientToken"></a>

```csharp
public string ClientToken { get; set; }
```

- *Type:* string

A unique token for idempotency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#client_token GlueDataQualityRuleset#client_token}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the data quality ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}

---

##### `Ruleset`<sup>Optional</sup> <a name="Ruleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset"></a>

```csharp
public string Ruleset { get; set; }
```

- *Type:* string

A Data Quality Definition Language (DQDL) ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}

---

##### `TargetTable`<sup>Optional</sup> <a name="TargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable"></a>

```csharp
public GlueDataQualityRulesetTargetTable TargetTable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

An object representing an AWS Glue table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#target_table GlueDataQualityRuleset#target_table}

---

### GlueDataQualityRulesetTargetTable <a name="GlueDataQualityRulesetTargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueDataQualityRulesetTargetTable {
    string DatabaseName = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database where the AWS Glue table exists. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName">TableName</a></code> | <code>string</code> | The name of the AWS Glue table. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database where the AWS Glue table exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#database_name GlueDataQualityRuleset#database_name}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the AWS Glue table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#table_name GlueDataQualityRuleset#table_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueDataQualityRulesetTargetTableOutputReference <a name="GlueDataQualityRulesetTargetTableOutputReference" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueDataQualityRulesetTargetTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueDataQualityRulesetTargetTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---



