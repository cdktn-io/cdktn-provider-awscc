# `macieFindingsFilter` Submodule <a name="`macieFindingsFilter` Submodule" id="@cdktn/provider-awscc.macieFindingsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieFindingsFilter <a name="MacieFindingsFilter" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter awscc_macie_findings_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilter(Construct Scope, string Id, MacieFindingsFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig">MacieFindingsFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig">MacieFindingsFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria">PutFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFindingCriteria` <a name="PutFindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria"></a>

```csharp
private void PutFindingCriteria(MacieFindingsFilterFindingCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags"></a>

```csharp
private void PutTags(IResolvable|MacieFindingsFilterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>[]

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MacieFindingsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MacieFindingsFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MacieFindingsFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MacieFindingsFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MacieFindingsFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MacieFindingsFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MacieFindingsFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MacieFindingsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MacieFindingsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference">MacieFindingsFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingsFilterId">FindingsFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList">MacieFindingsFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteriaInput">FindingCriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.position">Position</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteria"></a>

```csharp
public MacieFindingsFilterFindingCriteriaOutputReference FindingCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference">MacieFindingsFilterFindingCriteriaOutputReference</a>

---

##### `FindingsFilterId`<sup>Required</sup> <a name="FindingsFilterId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingsFilterId"></a>

```csharp
public string FindingsFilterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tags"></a>

```csharp
public MacieFindingsFilterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList">MacieFindingsFilterTagsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FindingCriteriaInput`<sup>Optional</sup> <a name="FindingCriteriaInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteriaInput"></a>

```csharp
public IResolvable|MacieFindingsFilterFindingCriteria FindingCriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tagsInput"></a>

```csharp
public IResolvable|MacieFindingsFilterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MacieFindingsFilterConfig <a name="MacieFindingsFilterConfig" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MacieFindingsFilterFindingCriteria FindingCriteria,
    string Name,
    string Action = null,
    string Description = null,
    double Position = null,
    IResolvable|MacieFindingsFilterTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.findingCriteria">FindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | Findings filter criteria. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.name">Name</a></code> | <code>string</code> | Findings filter name. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.action">Action</a></code> | <code>string</code> | Findings filter action. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.description">Description</a></code> | <code>string</code> | Findings filter description. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.position">Position</a></code> | <code>double</code> | Findings filter position. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FindingCriteria`<sup>Required</sup> <a name="FindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.findingCriteria"></a>

```csharp
public MacieFindingsFilterFindingCriteria FindingCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

Findings filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#finding_criteria MacieFindingsFilter#finding_criteria}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Findings filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#name MacieFindingsFilter#name}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Findings filter action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#action MacieFindingsFilter#action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Findings filter description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#description MacieFindingsFilter#description}

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Findings filter position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#position MacieFindingsFilter#position}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.tags"></a>

```csharp
public IResolvable|MacieFindingsFilterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#tags MacieFindingsFilter#tags}

---

### MacieFindingsFilterFindingCriteria <a name="MacieFindingsFilterFindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilterFindingCriteria {
    IResolvable|System.Collections.Generic.IDictionary<string, MacieFindingsFilterFindingCriteriaCriterion> Criterion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.property.criterion">Criterion</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>></code> | Map of filter criteria. |

---

##### `Criterion`<sup>Optional</sup> <a name="Criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.property.criterion"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, MacieFindingsFilterFindingCriteriaCriterion> Criterion { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>>

Map of filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#criterion MacieFindingsFilter#criterion}

---

### MacieFindingsFilterFindingCriteriaCriterion <a name="MacieFindingsFilterFindingCriteriaCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilterFindingCriteriaCriterion {
    string[] Eq = null,
    double Gt = null,
    double Gte = null,
    double Lt = null,
    double Lte = null,
    string[] Neq = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.eq">Eq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#eq MacieFindingsFilter#eq}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gt">Gt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#gt MacieFindingsFilter#gt}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gte">Gte</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#gte MacieFindingsFilter#gte}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lt">Lt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#lt MacieFindingsFilter#lt}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lte">Lte</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#lte MacieFindingsFilter#lte}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.neq">Neq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#neq MacieFindingsFilter#neq}. |

---

##### `Eq`<sup>Optional</sup> <a name="Eq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.eq"></a>

```csharp
public string[] Eq { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#eq MacieFindingsFilter#eq}.

---

##### `Gt`<sup>Optional</sup> <a name="Gt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gt"></a>

```csharp
public double Gt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#gt MacieFindingsFilter#gt}.

---

##### `Gte`<sup>Optional</sup> <a name="Gte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gte"></a>

```csharp
public double Gte { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#gte MacieFindingsFilter#gte}.

---

##### `Lt`<sup>Optional</sup> <a name="Lt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lt"></a>

```csharp
public double Lt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#lt MacieFindingsFilter#lt}.

---

##### `Lte`<sup>Optional</sup> <a name="Lte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lte"></a>

```csharp
public double Lte { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#lte MacieFindingsFilter#lte}.

---

##### `Neq`<sup>Optional</sup> <a name="Neq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.neq"></a>

```csharp
public string[] Neq { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#neq MacieFindingsFilter#neq}.

---

### MacieFindingsFilterTags <a name="MacieFindingsFilterTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.key">Key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.value">Value</a></code> | <code>string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#key MacieFindingsFilter#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/macie_findings_filter#value MacieFindingsFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MacieFindingsFilterFindingCriteriaCriterionMap <a name="MacieFindingsFilterFindingCriteriaCriterionMap" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilterFindingCriteriaCriterionMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get"></a>

```csharp
private MacieFindingsFilterFindingCriteriaCriterionOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, MacieFindingsFilterFindingCriteriaCriterion> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>>

---


### MacieFindingsFilterFindingCriteriaCriterionOutputReference <a name="MacieFindingsFilterFindingCriteriaCriterionOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilterFindingCriteriaCriterionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetEq">ResetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGt">ResetGt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGte">ResetGte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLt">ResetLt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLte">ResetLte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetNeq">ResetNeq</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEq` <a name="ResetEq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetEq"></a>

```csharp
private void ResetEq()
```

##### `ResetGt` <a name="ResetGt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGt"></a>

```csharp
private void ResetGt()
```

##### `ResetGte` <a name="ResetGte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGte"></a>

```csharp
private void ResetGte()
```

##### `ResetLt` <a name="ResetLt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLt"></a>

```csharp
private void ResetLt()
```

##### `ResetLte` <a name="ResetLte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLte"></a>

```csharp
private void ResetLte()
```

##### `ResetNeq` <a name="ResetNeq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetNeq"></a>

```csharp
private void ResetNeq()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput">EqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput">GteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput">GtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput">LteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput">LtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput">NeqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq">Eq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt">Gt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte">Gte</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt">Lt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte">Lte</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq">Neq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EqInput`<sup>Optional</sup> <a name="EqInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput"></a>

```csharp
public string[] EqInput { get; }
```

- *Type:* string[]

---

##### `GteInput`<sup>Optional</sup> <a name="GteInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput"></a>

```csharp
public double GteInput { get; }
```

- *Type:* double

---

##### `GtInput`<sup>Optional</sup> <a name="GtInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput"></a>

```csharp
public double GtInput { get; }
```

- *Type:* double

---

##### `LteInput`<sup>Optional</sup> <a name="LteInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput"></a>

```csharp
public double LteInput { get; }
```

- *Type:* double

---

##### `LtInput`<sup>Optional</sup> <a name="LtInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput"></a>

```csharp
public double LtInput { get; }
```

- *Type:* double

---

##### `NeqInput`<sup>Optional</sup> <a name="NeqInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput"></a>

```csharp
public string[] NeqInput { get; }
```

- *Type:* string[]

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```csharp
public string[] Eq { get; }
```

- *Type:* string[]

---

##### `Gt`<sup>Required</sup> <a name="Gt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```csharp
public double Gt { get; }
```

- *Type:* double

---

##### `Gte`<sup>Required</sup> <a name="Gte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```csharp
public double Gte { get; }
```

- *Type:* double

---

##### `Lt`<sup>Required</sup> <a name="Lt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```csharp
public double Lt { get; }
```

- *Type:* double

---

##### `Lte`<sup>Required</sup> <a name="Lte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```csharp
public double Lte { get; }
```

- *Type:* double

---

##### `Neq`<sup>Required</sup> <a name="Neq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```csharp
public string[] Neq { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MacieFindingsFilterFindingCriteriaCriterion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>

---


### MacieFindingsFilterFindingCriteriaOutputReference <a name="MacieFindingsFilterFindingCriteriaOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilterFindingCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion">PutCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resetCriterion">ResetCriterion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriterion` <a name="PutCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion"></a>

```csharp
private void PutCriterion(IResolvable|System.Collections.Generic.IDictionary<string, MacieFindingsFilterFindingCriteriaCriterion> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>>

---

##### `ResetCriterion` <a name="ResetCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resetCriterion"></a>

```csharp
private void ResetCriterion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterion">Criterion</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap">MacieFindingsFilterFindingCriteriaCriterionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterionInput">CriterionInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criterion`<sup>Required</sup> <a name="Criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterion"></a>

```csharp
public MacieFindingsFilterFindingCriteriaCriterionMap Criterion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap">MacieFindingsFilterFindingCriteriaCriterionMap</a>

---

##### `CriterionInput`<sup>Optional</sup> <a name="CriterionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, MacieFindingsFilterFindingCriteriaCriterion> CriterionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MacieFindingsFilterFindingCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

---


### MacieFindingsFilterTagsList <a name="MacieFindingsFilterTagsList" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get"></a>

```csharp
private MacieFindingsFilterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.internalValue"></a>

```csharp
public IResolvable|MacieFindingsFilterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>[]

---


### MacieFindingsFilterTagsOutputReference <a name="MacieFindingsFilterTagsOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieFindingsFilterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MacieFindingsFilterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>

---



