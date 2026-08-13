# `ec2NetworkInsightsAccessScopeAnalysis` Submodule <a name="`ec2NetworkInsightsAccessScopeAnalysis` Submodule" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsAccessScopeAnalysis <a name="Ec2NetworkInsightsAccessScopeAnalysis" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis awscc_ec2_network_insights_access_scope_analysis}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NetworkInsightsAccessScopeAnalysis(Construct Scope, string Id, Ec2NetworkInsightsAccessScopeAnalysisConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig">Ec2NetworkInsightsAccessScopeAnalysisConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig">Ec2NetworkInsightsAccessScopeAnalysisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2NetworkInsightsAccessScopeAnalysisTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkInsightsAccessScopeAnalysis resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2NetworkInsightsAccessScopeAnalysis.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2NetworkInsightsAccessScopeAnalysis.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2NetworkInsightsAccessScopeAnalysis.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2NetworkInsightsAccessScopeAnalysis.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2NetworkInsightsAccessScopeAnalysis resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2NetworkInsightsAccessScopeAnalysis to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2NetworkInsightsAccessScopeAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInsightsAccessScopeAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.analyzedEniCount">AnalyzedEniCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.findingsFound">FindingsFound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisArn">NetworkInsightsAccessScopeAnalysisArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisId">NetworkInsightsAccessScopeAnalysisId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList">Ec2NetworkInsightsAccessScopeAnalysisTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeIdInput">NetworkInsightsAccessScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeId">NetworkInsightsAccessScopeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnalyzedEniCount`<sup>Required</sup> <a name="AnalyzedEniCount" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.analyzedEniCount"></a>

```csharp
public double AnalyzedEniCount { get; }
```

- *Type:* double

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `FindingsFound`<sup>Required</sup> <a name="FindingsFound" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.findingsFound"></a>

```csharp
public string FindingsFound { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkInsightsAccessScopeAnalysisArn`<sup>Required</sup> <a name="NetworkInsightsAccessScopeAnalysisArn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisArn"></a>

```csharp
public string NetworkInsightsAccessScopeAnalysisArn { get; }
```

- *Type:* string

---

##### `NetworkInsightsAccessScopeAnalysisId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeAnalysisId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisId"></a>

```csharp
public string NetworkInsightsAccessScopeAnalysisId { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tags"></a>

```csharp
public Ec2NetworkInsightsAccessScopeAnalysisTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList">Ec2NetworkInsightsAccessScopeAnalysisTagsList</a>

---

##### `NetworkInsightsAccessScopeIdInput`<sup>Optional</sup> <a name="NetworkInsightsAccessScopeIdInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeIdInput"></a>

```csharp
public string NetworkInsightsAccessScopeIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tagsInput"></a>

```csharp
public IResolvable|Ec2NetworkInsightsAccessScopeAnalysisTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]

---

##### `NetworkInsightsAccessScopeId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeId"></a>

```csharp
public string NetworkInsightsAccessScopeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsAccessScopeAnalysisConfig <a name="Ec2NetworkInsightsAccessScopeAnalysisConfig" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NetworkInsightsAccessScopeAnalysisConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string NetworkInsightsAccessScopeId,
    IResolvable|Ec2NetworkInsightsAccessScopeAnalysisTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.networkInsightsAccessScopeId">NetworkInsightsAccessScopeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis#network_insights_access_scope_id Ec2NetworkInsightsAccessScopeAnalysis#network_insights_access_scope_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis#tags Ec2NetworkInsightsAccessScopeAnalysis#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NetworkInsightsAccessScopeId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.networkInsightsAccessScopeId"></a>

```csharp
public string NetworkInsightsAccessScopeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis#network_insights_access_scope_id Ec2NetworkInsightsAccessScopeAnalysis#network_insights_access_scope_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.tags"></a>

```csharp
public IResolvable|Ec2NetworkInsightsAccessScopeAnalysisTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis#tags Ec2NetworkInsightsAccessScopeAnalysis#tags}.

---

### Ec2NetworkInsightsAccessScopeAnalysisTags <a name="Ec2NetworkInsightsAccessScopeAnalysisTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NetworkInsightsAccessScopeAnalysisTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis#key Ec2NetworkInsightsAccessScopeAnalysis#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis#value Ec2NetworkInsightsAccessScopeAnalysis#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis#key Ec2NetworkInsightsAccessScopeAnalysis#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_insights_access_scope_analysis#value Ec2NetworkInsightsAccessScopeAnalysis#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInsightsAccessScopeAnalysisTagsList <a name="Ec2NetworkInsightsAccessScopeAnalysisTagsList" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NetworkInsightsAccessScopeAnalysisTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.get"></a>

```csharp
private Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2NetworkInsightsAccessScopeAnalysisTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>[]

---


### Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference <a name="Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2NetworkInsightsAccessScopeAnalysisTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags">Ec2NetworkInsightsAccessScopeAnalysisTags</a>

---



