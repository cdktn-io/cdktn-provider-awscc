# `lakeformationDataCellsFilter` Submodule <a name="`lakeformationDataCellsFilter` Submodule" id="@cdktn/provider-awscc.lakeformationDataCellsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataCellsFilter <a name="LakeformationDataCellsFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter awscc_lakeformation_data_cells_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationDataCellsFilter(Construct Scope, string Id, LakeformationDataCellsFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard">PutColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter">PutRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard">ResetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter">ResetRowFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumnWildcard` <a name="PutColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard"></a>

```csharp
private void PutColumnWildcard(LakeformationDataCellsFilterColumnWildcard Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---

##### `PutRowFilter` <a name="PutRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter"></a>

```csharp
private void PutRowFilter(LakeformationDataCellsFilterRowFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetColumnWildcard` <a name="ResetColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard"></a>

```csharp
private void ResetColumnWildcard()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter"></a>

```csharp
private void ResetRowFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationDataCellsFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationDataCellsFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationDataCellsFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationDataCellsFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationDataCellsFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationDataCellsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationDataCellsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput">ColumnWildcardInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput">RowFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput">TableCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId">TableCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ColumnWildcard`<sup>Required</sup> <a name="ColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard"></a>

```csharp
public LakeformationDataCellsFilterColumnWildcardOutputReference ColumnWildcard { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter"></a>

```csharp
public LakeformationDataCellsFilterRowFilterOutputReference RowFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a>

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `ColumnWildcardInput`<sup>Optional</sup> <a name="ColumnWildcardInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput"></a>

```csharp
public IResolvable|LakeformationDataCellsFilterColumnWildcard ColumnWildcardInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput"></a>

```csharp
public IResolvable|LakeformationDataCellsFilterRowFilter RowFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---

##### `TableCatalogIdInput`<sup>Optional</sup> <a name="TableCatalogIdInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput"></a>

```csharp
public string TableCatalogIdInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId"></a>

```csharp
public string TableCatalogId { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataCellsFilterColumnWildcard <a name="LakeformationDataCellsFilterColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationDataCellsFilterColumnWildcard {
    string[] ExcludedColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | A list of column names to be excluded from the Data Cells Filter. |

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; set; }
```

- *Type:* string[]

A list of column names to be excluded from the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}

---

### LakeformationDataCellsFilterConfig <a name="LakeformationDataCellsFilterConfig" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationDataCellsFilterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DatabaseName,
    string Name,
    string TableCatalogId,
    string TableName,
    string[] ColumnNames = null,
    LakeformationDataCellsFilterColumnWildcard ColumnWildcard = null,
    LakeformationDataCellsFilterRowFilter RowFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the Database that the Table resides in. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name">Name</a></code> | <code>string</code> | The desired name of the Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId">TableCatalogId</a></code> | <code>string</code> | The Catalog Id of the Table on which to create a Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName">TableName</a></code> | <code>string</code> | The name of the Table to create a Data Cells Filter for. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | A list of columns to be included in this Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the Database that the Table resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The desired name of the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId"></a>

```csharp
public string TableCatalogId { get; set; }
```

- *Type:* string

The Catalog Id of the Table on which to create a Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the Table to create a Data Cells Filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

A list of columns to be included in this Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}

---

##### `ColumnWildcard`<sup>Optional</sup> <a name="ColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard"></a>

```csharp
public LakeformationDataCellsFilterColumnWildcard ColumnWildcard { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter"></a>

```csharp
public LakeformationDataCellsFilterRowFilter RowFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

### LakeformationDataCellsFilterRowFilter <a name="LakeformationDataCellsFilterRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationDataCellsFilterRowFilter {
    string AllRowsWildcard = null,
    string FilterExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard">AllRowsWildcard</a></code> | <code>string</code> | An empty object representing a row wildcard. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression">FilterExpression</a></code> | <code>string</code> | A PartiQL predicate. |

---

##### `AllRowsWildcard`<sup>Optional</sup> <a name="AllRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard"></a>

```csharp
public string AllRowsWildcard { get; set; }
```

- *Type:* string

An empty object representing a row wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

##### `FilterExpression`<sup>Optional</sup> <a name="FilterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression"></a>

```csharp
public string FilterExpression { get; set; }
```

- *Type:* string

A PartiQL predicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataCellsFilterColumnWildcardOutputReference <a name="LakeformationDataCellsFilterColumnWildcardOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationDataCellsFilterColumnWildcardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```csharp
private void ResetExcludedColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```csharp
public string[] ExcludedColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationDataCellsFilterColumnWildcard InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---


### LakeformationDataCellsFilterRowFilterOutputReference <a name="LakeformationDataCellsFilterRowFilterOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationDataCellsFilterRowFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard">ResetAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression">ResetFilterExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllRowsWildcard` <a name="ResetAllRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard"></a>

```csharp
private void ResetAllRowsWildcard()
```

##### `ResetFilterExpression` <a name="ResetFilterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression"></a>

```csharp
private void ResetFilterExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput">AllRowsWildcardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput">FilterExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard">AllRowsWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression">FilterExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllRowsWildcardInput`<sup>Optional</sup> <a name="AllRowsWildcardInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput"></a>

```csharp
public string AllRowsWildcardInput { get; }
```

- *Type:* string

---

##### `FilterExpressionInput`<sup>Optional</sup> <a name="FilterExpressionInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput"></a>

```csharp
public string FilterExpressionInput { get; }
```

- *Type:* string

---

##### `AllRowsWildcard`<sup>Required</sup> <a name="AllRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard"></a>

```csharp
public string AllRowsWildcard { get; }
```

- *Type:* string

---

##### `FilterExpression`<sup>Required</sup> <a name="FilterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression"></a>

```csharp
public string FilterExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationDataCellsFilterRowFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---



