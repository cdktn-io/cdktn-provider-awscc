# `ceAnomalyMonitor` Submodule <a name="`ceAnomalyMonitor` Submodule" id="@cdktn/provider-awscc.ceAnomalyMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalyMonitor <a name="CeAnomalyMonitor" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor awscc_ce_anomaly_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalyMonitor(Construct Scope, string Id, CeAnomalyMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig">CeAnomalyMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig">CeAnomalyMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension">ResetMonitorDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification">ResetMonitorSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetResourceTags">ResetResourceTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceTags` <a name="PutResourceTags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.putResourceTags"></a>

```csharp
private void PutResourceTags(IResolvable|CeAnomalyMonitorResourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.putResourceTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>[]

---

##### `ResetMonitorDimension` <a name="ResetMonitorDimension" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension"></a>

```csharp
private void ResetMonitorDimension()
```

##### `ResetMonitorSpecification` <a name="ResetMonitorSpecification" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification"></a>

```csharp
private void ResetMonitorSpecification()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CeAnomalyMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CeAnomalyMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CeAnomalyMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CeAnomalyMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CeAnomalyMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CeAnomalyMonitor resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CeAnomalyMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CeAnomalyMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CeAnomalyMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.dimensionalValueCount">DimensionalValueCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lastEvaluatedDate">LastEvaluatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorArn">MonitorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList">CeAnomalyMonitorResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput">MonitorDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorNameInput">MonitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput">MonitorSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput">MonitorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension">MonitorDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorName">MonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification">MonitorSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType">MonitorType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `DimensionalValueCount`<sup>Required</sup> <a name="DimensionalValueCount" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.dimensionalValueCount"></a>

```csharp
public double DimensionalValueCount { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastEvaluatedDate`<sup>Required</sup> <a name="LastEvaluatedDate" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lastEvaluatedDate"></a>

```csharp
public string LastEvaluatedDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `MonitorArn`<sup>Required</sup> <a name="MonitorArn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorArn"></a>

```csharp
public string MonitorArn { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.resourceTags"></a>

```csharp
public CeAnomalyMonitorResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList">CeAnomalyMonitorResourceTagsList</a>

---

##### `MonitorDimensionInput`<sup>Optional</sup> <a name="MonitorDimensionInput" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput"></a>

```csharp
public string MonitorDimensionInput { get; }
```

- *Type:* string

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorNameInput"></a>

```csharp
public string MonitorNameInput { get; }
```

- *Type:* string

---

##### `MonitorSpecificationInput`<sup>Optional</sup> <a name="MonitorSpecificationInput" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput"></a>

```csharp
public string MonitorSpecificationInput { get; }
```

- *Type:* string

---

##### `MonitorTypeInput`<sup>Optional</sup> <a name="MonitorTypeInput" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput"></a>

```csharp
public string MonitorTypeInput { get; }
```

- *Type:* string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.resourceTagsInput"></a>

```csharp
public IResolvable|CeAnomalyMonitorResourceTags[] ResourceTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>[]

---

##### `MonitorDimension`<sup>Required</sup> <a name="MonitorDimension" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension"></a>

```csharp
public string MonitorDimension { get; }
```

- *Type:* string

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorName"></a>

```csharp
public string MonitorName { get; }
```

- *Type:* string

---

##### `MonitorSpecification`<sup>Required</sup> <a name="MonitorSpecification" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification"></a>

```csharp
public string MonitorSpecification { get; }
```

- *Type:* string

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType"></a>

```csharp
public string MonitorType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalyMonitorConfig <a name="CeAnomalyMonitorConfig" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalyMonitorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MonitorName,
    string MonitorType,
    string MonitorDimension = null,
    string MonitorSpecification = null,
    IResolvable|CeAnomalyMonitorResourceTags[] ResourceTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorName">MonitorName</a></code> | <code>string</code> | The name of the monitor. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType">MonitorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension">MonitorDimension</a></code> | <code>string</code> | The dimensions to evaluate. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification">MonitorSpecification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.resourceTags">ResourceTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>[]</code> | Tags to assign to monitor. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorName"></a>

```csharp
public string MonitorName { get; set; }
```

- *Type:* string

The name of the monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#monitor_name CeAnomalyMonitor#monitor_name}

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType"></a>

```csharp
public string MonitorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}.

---

##### `MonitorDimension`<sup>Optional</sup> <a name="MonitorDimension" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension"></a>

```csharp
public string MonitorDimension { get; set; }
```

- *Type:* string

The dimensions to evaluate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}

---

##### `MonitorSpecification`<sup>Optional</sup> <a name="MonitorSpecification" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification"></a>

```csharp
public string MonitorSpecification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}.

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.resourceTags"></a>

```csharp
public IResolvable|CeAnomalyMonitorResourceTags[] ResourceTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>[]

Tags to assign to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#resource_tags CeAnomalyMonitor#resource_tags}

---

### CeAnomalyMonitorResourceTags <a name="CeAnomalyMonitorResourceTags" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalyMonitorResourceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.property.key">Key</a></code> | <code>string</code> | The key name for the tag. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#key CeAnomalyMonitor#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ce_anomaly_monitor#value CeAnomalyMonitor#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CeAnomalyMonitorResourceTagsList <a name="CeAnomalyMonitorResourceTagsList" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalyMonitorResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.get"></a>

```csharp
private CeAnomalyMonitorResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|CeAnomalyMonitorResourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>[]

---


### CeAnomalyMonitorResourceTagsOutputReference <a name="CeAnomalyMonitorResourceTagsOutputReference" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalyMonitorResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CeAnomalyMonitorResourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalyMonitor.CeAnomalyMonitorResourceTags">CeAnomalyMonitorResourceTags</a>

---



