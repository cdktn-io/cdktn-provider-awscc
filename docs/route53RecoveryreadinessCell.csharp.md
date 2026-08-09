# `route53RecoveryreadinessCell` Submodule <a name="`route53RecoveryreadinessCell` Submodule" id="@cdktn/provider-awscc.route53RecoveryreadinessCell"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessCell <a name="Route53RecoveryreadinessCell" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoveryreadiness_cell awscc_route53recoveryreadiness_cell}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessCell(Construct Scope, string Id, Route53RecoveryreadinessCellConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig">Route53RecoveryreadinessCellConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig">Route53RecoveryreadinessCellConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetCellName">ResetCellName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetCells">ResetCells</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53RecoveryreadinessCellTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags">Route53RecoveryreadinessCellTags</a>[]

---

##### `ResetCellName` <a name="ResetCellName" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetCellName"></a>

```csharp
private void ResetCellName()
```

##### `ResetCells` <a name="ResetCells" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetCells"></a>

```csharp
private void ResetCells()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoveryreadinessCell resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoveryreadinessCell.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoveryreadinessCell.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoveryreadinessCell.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53RecoveryreadinessCell.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53RecoveryreadinessCell resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecoveryreadinessCell to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecoveryreadinessCell that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoveryreadiness_cell#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoveryreadinessCell to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellArn">CellArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.parentReadinessScopes">ParentReadinessScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList">Route53RecoveryreadinessCellTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellNameInput">CellNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellsInput">CellsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags">Route53RecoveryreadinessCellTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellName">CellName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cells">Cells</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CellArn`<sup>Required</sup> <a name="CellArn" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellArn"></a>

```csharp
public string CellArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParentReadinessScopes`<sup>Required</sup> <a name="ParentReadinessScopes" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.parentReadinessScopes"></a>

```csharp
public string[] ParentReadinessScopes { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tags"></a>

```csharp
public Route53RecoveryreadinessCellTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList">Route53RecoveryreadinessCellTagsList</a>

---

##### `CellNameInput`<sup>Optional</sup> <a name="CellNameInput" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellNameInput"></a>

```csharp
public string CellNameInput { get; }
```

- *Type:* string

---

##### `CellsInput`<sup>Optional</sup> <a name="CellsInput" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellsInput"></a>

```csharp
public string[] CellsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsInput"></a>

```csharp
public IResolvable|Route53RecoveryreadinessCellTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags">Route53RecoveryreadinessCellTags</a>[]

---

##### `CellName`<sup>Required</sup> <a name="CellName" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellName"></a>

```csharp
public string CellName { get; }
```

- *Type:* string

---

##### `Cells`<sup>Required</sup> <a name="Cells" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cells"></a>

```csharp
public string[] Cells { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessCellConfig <a name="Route53RecoveryreadinessCellConfig" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessCellConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CellName = null,
    string[] Cells = null,
    IResolvable|Route53RecoveryreadinessCellTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cellName">CellName</a></code> | <code>string</code> | The name of the cell to create. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cells">Cells</a></code> | <code>string[]</code> | A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags">Route53RecoveryreadinessCellTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CellName`<sup>Optional</sup> <a name="CellName" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cellName"></a>

```csharp
public string CellName { get; set; }
```

- *Type:* string

The name of the cell to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoveryreadiness_cell#cell_name Route53RecoveryreadinessCell#cell_name}

---

##### `Cells`<sup>Optional</sup> <a name="Cells" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cells"></a>

```csharp
public string[] Cells { get; set; }
```

- *Type:* string[]

A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells.

For example, Availability Zones within specific Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoveryreadiness_cell#cells Route53RecoveryreadinessCell#cells}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tags"></a>

```csharp
public IResolvable|Route53RecoveryreadinessCellTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags">Route53RecoveryreadinessCellTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoveryreadiness_cell#tags Route53RecoveryreadinessCell#tags}

---

### Route53RecoveryreadinessCellTags <a name="Route53RecoveryreadinessCellTags" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessCellTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoveryreadiness_cell#key Route53RecoveryreadinessCell#key}. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoveryreadiness_cell#value Route53RecoveryreadinessCell#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoveryreadiness_cell#key Route53RecoveryreadinessCell#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoveryreadiness_cell#value Route53RecoveryreadinessCell#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessCellTagsList <a name="Route53RecoveryreadinessCellTagsList" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessCellTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.get"></a>

```csharp
private Route53RecoveryreadinessCellTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags">Route53RecoveryreadinessCellTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoveryreadinessCellTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags">Route53RecoveryreadinessCellTags</a>[]

---


### Route53RecoveryreadinessCellTagsOutputReference <a name="Route53RecoveryreadinessCellTagsOutputReference" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53RecoveryreadinessCellTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags">Route53RecoveryreadinessCellTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoveryreadinessCellTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTags">Route53RecoveryreadinessCellTags</a>

---



