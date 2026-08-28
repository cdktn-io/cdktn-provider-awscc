# `connectMetric` Submodule <a name="`connectMetric` Submodule" id="@cdktn/provider-awscc.connectMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectMetric <a name="ConnectMetric" id="@cdktn/provider-awscc.connectMetric.ConnectMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric awscc_connect_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetric(Construct Scope, string Id, ConnectMetricConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig">ConnectMetricConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig">ConnectMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.putMetricCalculation">PutMetricCalculation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetMetricCalculation">ResetMetricCalculation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetPositiveTrendIndicator">ResetPositiveTrendIndicator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricCalculation` <a name="PutMetricCalculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.putMetricCalculation"></a>

```csharp
private void PutMetricCalculation(ConnectMetricMetricCalculation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.putMetricCalculation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectMetricTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMetricCalculation` <a name="ResetMetricCalculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetMetricCalculation"></a>

```csharp
private void ResetMetricCalculation()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPositiveTrendIndicator` <a name="ResetPositiveTrendIndicator" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetPositiveTrendIndicator"></a>

```csharp
private void ResetPositiveTrendIndicator()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.resetUnit"></a>

```csharp
private void ResetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectMetric resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectMetric.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectMetric.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectMetric.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectMetric.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectMetric resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectMetric to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.createdTime">CreatedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.createdUser">CreatedUser</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference">ConnectMetricCreatedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.creationMethod">CreationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.effectiveTime">EffectiveTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList">ConnectMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.groupings">Groupings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedUser">LastModifiedUser</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference">ConnectMetricLastModifiedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricArn">MetricArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricCalculation">MetricCalculation</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference">ConnectMetricMetricCalculationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.primaryEventSource">PrimaryEventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.primaryEventSourceEffectiveTimestampType">PrimaryEventSourceEffectiveTimestampType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.refreshRate">RefreshRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportedStats">SupportedStats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportsCustomCalculation">SupportsCustomCalculation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportsPreaggregateCalculation">SupportsPreaggregateCalculation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList">ConnectMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricCalculationInput">MetricCalculationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.positiveTrendIndicatorInput">PositiveTrendIndicatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.positiveTrendIndicator">PositiveTrendIndicator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.unit">Unit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.createdTime"></a>

```csharp
public double CreatedTime { get; }
```

- *Type:* double

---

##### `CreatedUser`<sup>Required</sup> <a name="CreatedUser" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.createdUser"></a>

```csharp
public ConnectMetricCreatedUserOutputReference CreatedUser { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference">ConnectMetricCreatedUserOutputReference</a>

---

##### `CreationMethod`<sup>Required</sup> <a name="CreationMethod" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.creationMethod"></a>

```csharp
public string CreationMethod { get; }
```

- *Type:* string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.effectiveTime"></a>

```csharp
public double EffectiveTime { get; }
```

- *Type:* double

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.filters"></a>

```csharp
public ConnectMetricFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList">ConnectMetricFiltersList</a>

---

##### `Groupings`<sup>Required</sup> <a name="Groupings" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.groupings"></a>

```csharp
public string[] Groupings { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedRegion"></a>

```csharp
public string LastModifiedRegion { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `LastModifiedUser`<sup>Required</sup> <a name="LastModifiedUser" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.lastModifiedUser"></a>

```csharp
public ConnectMetricLastModifiedUserOutputReference LastModifiedUser { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference">ConnectMetricLastModifiedUserOutputReference</a>

---

##### `MetricArn`<sup>Required</sup> <a name="MetricArn" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricArn"></a>

```csharp
public string MetricArn { get; }
```

- *Type:* string

---

##### `MetricCalculation`<sup>Required</sup> <a name="MetricCalculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricCalculation"></a>

```csharp
public ConnectMetricMetricCalculationOutputReference MetricCalculation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference">ConnectMetricMetricCalculationOutputReference</a>

---

##### `PrimaryEventSource`<sup>Required</sup> <a name="PrimaryEventSource" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.primaryEventSource"></a>

```csharp
public string PrimaryEventSource { get; }
```

- *Type:* string

---

##### `PrimaryEventSourceEffectiveTimestampType`<sup>Required</sup> <a name="PrimaryEventSourceEffectiveTimestampType" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.primaryEventSourceEffectiveTimestampType"></a>

```csharp
public string PrimaryEventSourceEffectiveTimestampType { get; }
```

- *Type:* string

---

##### `RefreshRate`<sup>Required</sup> <a name="RefreshRate" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.refreshRate"></a>

```csharp
public double RefreshRate { get; }
```

- *Type:* double

---

##### `SupportedStats`<sup>Required</sup> <a name="SupportedStats" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportedStats"></a>

```csharp
public string[] SupportedStats { get; }
```

- *Type:* string[]

---

##### `SupportsCustomCalculation`<sup>Required</sup> <a name="SupportsCustomCalculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportsCustomCalculation"></a>

```csharp
public IResolvable SupportsCustomCalculation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsPreaggregateCalculation`<sup>Required</sup> <a name="SupportsPreaggregateCalculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.supportsPreaggregateCalculation"></a>

```csharp
public IResolvable SupportsPreaggregateCalculation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tags"></a>

```csharp
public ConnectMetricTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList">ConnectMetricTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `MetricCalculationInput`<sup>Optional</sup> <a name="MetricCalculationInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.metricCalculationInput"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculation MetricCalculationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PositiveTrendIndicatorInput`<sup>Optional</sup> <a name="PositiveTrendIndicatorInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.positiveTrendIndicatorInput"></a>

```csharp
public string PositiveTrendIndicatorInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tagsInput"></a>

```csharp
public IResolvable|ConnectMetricTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>[]

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PositiveTrendIndicator`<sup>Required</sup> <a name="PositiveTrendIndicator" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.positiveTrendIndicator"></a>

```csharp
public string PositiveTrendIndicator { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectMetric.ConnectMetric.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectMetricConfig <a name="ConnectMetricConfig" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    string Description = null,
    ConnectMetricMetricCalculation MetricCalculation = null,
    string Name = null,
    string PositiveTrendIndicator = null,
    string Status = null,
    IResolvable|ConnectMetricTags[] Tags = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.description">Description</a></code> | <code>string</code> | The description of the custom metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.metricCalculation">MetricCalculation</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a></code> | The calculation configuration for the metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.name">Name</a></code> | <code>string</code> | The name of the custom metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.positiveTrendIndicator">PositiveTrendIndicator</a></code> | <code>string</code> | Indicates how to classify a positive trend in metric data on the UI. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.status">Status</a></code> | <code>string</code> | The status of the custom metric. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>[]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.unit">Unit</a></code> | <code>string</code> | Display unit for the metric data. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#instance_arn ConnectMetric#instance_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the custom metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#description ConnectMetric#description}

---

##### `MetricCalculation`<sup>Optional</sup> <a name="MetricCalculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.metricCalculation"></a>

```csharp
public ConnectMetricMetricCalculation MetricCalculation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a>

The calculation configuration for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#metric_calculation ConnectMetric#metric_calculation}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the custom metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#name ConnectMetric#name}

---

##### `PositiveTrendIndicator`<sup>Optional</sup> <a name="PositiveTrendIndicator" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.positiveTrendIndicator"></a>

```csharp
public string PositiveTrendIndicator { get; set; }
```

- *Type:* string

Indicates how to classify a positive trend in metric data on the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#positive_trend_indicator ConnectMetric#positive_trend_indicator}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the custom metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#status ConnectMetric#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.tags"></a>

```csharp
public IResolvable|ConnectMetricTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#tags ConnectMetric#tags}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.connectMetric.ConnectMetricConfig.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Display unit for the metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#unit ConnectMetric#unit}

---

### ConnectMetricCreatedUser <a name="ConnectMetricCreatedUser" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricCreatedUser {

};
```


### ConnectMetricFilters <a name="ConnectMetricFilters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricFilters {

};
```


### ConnectMetricLastModifiedUser <a name="ConnectMetricLastModifiedUser" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricLastModifiedUser {

};
```


### ConnectMetricMetricCalculation <a name="ConnectMetricMetricCalculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculation {
    string Calculation = null,
    IResolvable|ConnectMetricMetricCalculationCalculationComponents[] CalculationComponents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.property.calculation">Calculation</a></code> | <code>string</code> | The calculation formula. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.property.calculationComponents">CalculationComponents</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>[]</code> | The calculation components for the metric. |

---

##### `Calculation`<sup>Optional</sup> <a name="Calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.property.calculation"></a>

```csharp
public string Calculation { get; set; }
```

- *Type:* string

The calculation formula.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#calculation ConnectMetric#calculation}

---

##### `CalculationComponents`<sup>Optional</sup> <a name="CalculationComponents" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation.property.calculationComponents"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponents[] CalculationComponents { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>[]

The calculation components for the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#calculation_components ConnectMetric#calculation_components}

---

### ConnectMetricMetricCalculationCalculationComponents <a name="ConnectMetricMetricCalculationCalculationComponents" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponents {
    string Alias = null,
    IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFilters[] MetricFilters = null,
    string MetricId = null,
    string MetricName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.alias">Alias</a></code> | <code>string</code> | Metric calculation component alias for use within a calculation. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricFilters">MetricFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#metric_filters ConnectMetric#metric_filters}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricId">MetricId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#metric_id ConnectMetric#metric_id}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#metric_name ConnectMetric#metric_name}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Metric calculation component alias for use within a calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#alias ConnectMetric#alias}

---

##### `MetricFilters`<sup>Optional</sup> <a name="MetricFilters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricFilters"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFilters[] MetricFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#metric_filters ConnectMetric#metric_filters}.

---

##### `MetricId`<sup>Optional</sup> <a name="MetricId" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricId"></a>

```csharp
public string MetricId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#metric_id ConnectMetric#metric_id}.

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#metric_name ConnectMetric#metric_name}.

---

### ConnectMetricMetricCalculationCalculationComponentsMetricFilters <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFilters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsMetricFilters {
    ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition BooleanCondition = null,
    string MetricFilterKey = null,
    bool|IResolvable Negate = null,
    ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition NumberCondition = null,
    ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition StringCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.booleanCondition">BooleanCondition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#boolean_condition ConnectMetric#boolean_condition}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.metricFilterKey">MetricFilterKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#metric_filter_key ConnectMetric#metric_filter_key}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#negate ConnectMetric#negate}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.numberCondition">NumberCondition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#number_condition ConnectMetric#number_condition}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.stringCondition">StringCondition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#string_condition ConnectMetric#string_condition}. |

---

##### `BooleanCondition`<sup>Optional</sup> <a name="BooleanCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.booleanCondition"></a>

```csharp
public ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition BooleanCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#boolean_condition ConnectMetric#boolean_condition}.

---

##### `MetricFilterKey`<sup>Optional</sup> <a name="MetricFilterKey" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.metricFilterKey"></a>

```csharp
public string MetricFilterKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#metric_filter_key ConnectMetric#metric_filter_key}.

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#negate ConnectMetric#negate}.

---

##### `NumberCondition`<sup>Optional</sup> <a name="NumberCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.numberCondition"></a>

```csharp
public ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition NumberCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#number_condition ConnectMetric#number_condition}.

---

##### `StringCondition`<sup>Optional</sup> <a name="StringCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters.property.stringCondition"></a>

```csharp
public ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition StringCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#string_condition ConnectMetric#string_condition}.

---

### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition {
    string Comparison = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}.

---

### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition {
    string Comparison = null,
    double[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.property.values">Values</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#values ConnectMetric#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#values ConnectMetric#values}.

---

### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition {
    string Comparison = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#values ConnectMetric#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#comparison ConnectMetric#comparison}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#values ConnectMetric#values}.

---

### ConnectMetricTags <a name="ConnectMetricTags" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#key ConnectMetric#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_metric#value ConnectMetric#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectMetricCreatedUserOutputReference <a name="ConnectMetricCreatedUserOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricCreatedUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.awsIdentityArn">AwsIdentityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.connectUserArn">ConnectUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUser">ConnectMetricCreatedUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsIdentityArn`<sup>Required</sup> <a name="AwsIdentityArn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.awsIdentityArn"></a>

```csharp
public string AwsIdentityArn { get; }
```

- *Type:* string

---

##### `ConnectUserArn`<sup>Required</sup> <a name="ConnectUserArn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.connectUserArn"></a>

```csharp
public string ConnectUserArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUserOutputReference.property.internalValue"></a>

```csharp
public ConnectMetricCreatedUser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricCreatedUser">ConnectMetricCreatedUser</a>

---


### ConnectMetricFiltersList <a name="ConnectMetricFiltersList" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.get"></a>

```csharp
private ConnectMetricFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ConnectMetricFiltersOutputReference <a name="ConnectMetricFiltersOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFilters">ConnectMetricFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricFiltersOutputReference.property.internalValue"></a>

```csharp
public ConnectMetricFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricFilters">ConnectMetricFilters</a>

---


### ConnectMetricLastModifiedUserOutputReference <a name="ConnectMetricLastModifiedUserOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricLastModifiedUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn">AwsIdentityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.connectUserArn">ConnectUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUser">ConnectMetricLastModifiedUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsIdentityArn`<sup>Required</sup> <a name="AwsIdentityArn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn"></a>

```csharp
public string AwsIdentityArn { get; }
```

- *Type:* string

---

##### `ConnectUserArn`<sup>Required</sup> <a name="ConnectUserArn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.connectUserArn"></a>

```csharp
public string ConnectUserArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUserOutputReference.property.internalValue"></a>

```csharp
public ConnectMetricLastModifiedUser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricLastModifiedUser">ConnectMetricLastModifiedUser</a>

---


### ConnectMetricMetricCalculationCalculationComponentsList <a name="ConnectMetricMetricCalculationCalculationComponentsList" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.get"></a>

```csharp
private ConnectMetricMetricCalculationCalculationComponentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponents[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>[]

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get"></a>

```csharp
private ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>[]

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putBooleanCondition">PutBooleanCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putNumberCondition">PutNumberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putStringCondition">PutStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetBooleanCondition">ResetBooleanCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetMetricFilterKey">ResetMetricFilterKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetNumberCondition">ResetNumberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetStringCondition">ResetStringCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBooleanCondition` <a name="PutBooleanCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putBooleanCondition"></a>

```csharp
private void PutBooleanCondition(ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putBooleanCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

---

##### `PutNumberCondition` <a name="PutNumberCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putNumberCondition"></a>

```csharp
private void PutNumberCondition(ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putNumberCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

---

##### `PutStringCondition` <a name="PutStringCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putStringCondition"></a>

```csharp
private void PutStringCondition(ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.putStringCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

---

##### `ResetBooleanCondition` <a name="ResetBooleanCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetBooleanCondition"></a>

```csharp
private void ResetBooleanCondition()
```

##### `ResetMetricFilterKey` <a name="ResetMetricFilterKey" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetMetricFilterKey"></a>

```csharp
private void ResetMetricFilterKey()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```

##### `ResetNumberCondition` <a name="ResetNumberCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetNumberCondition"></a>

```csharp
private void ResetNumberCondition()
```

##### `ResetStringCondition` <a name="ResetStringCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resetStringCondition"></a>

```csharp
private void ResetStringCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition">BooleanCondition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition">NumberCondition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition">StringCondition</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanConditionInput">BooleanConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKeyInput">MetricFilterKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negateInput">NegateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberConditionInput">NumberConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringConditionInput">StringConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey">MetricFilterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate">Negate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanCondition`<sup>Required</sup> <a name="BooleanCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition"></a>

```csharp
public ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference BooleanCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a>

---

##### `NumberCondition`<sup>Required</sup> <a name="NumberCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition"></a>

```csharp
public ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference NumberCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a>

---

##### `StringCondition`<sup>Required</sup> <a name="StringCondition" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition"></a>

```csharp
public ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference StringCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a>

---

##### `BooleanConditionInput`<sup>Optional</sup> <a name="BooleanConditionInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanConditionInput"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition BooleanConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

---

##### `MetricFilterKeyInput`<sup>Optional</sup> <a name="MetricFilterKeyInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKeyInput"></a>

```csharp
public string MetricFilterKeyInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negateInput"></a>

```csharp
public bool|IResolvable NegateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberConditionInput`<sup>Optional</sup> <a name="NumberConditionInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberConditionInput"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition NumberConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

---

##### `StringConditionInput`<sup>Optional</sup> <a name="StringConditionInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringConditionInput"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition StringConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

---

##### `MetricFilterKey`<sup>Required</sup> <a name="MetricFilterKey" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey"></a>

```csharp
public string MetricFilterKey { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate"></a>

```csharp
public bool|IResolvable Negate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>

---


### ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

---


### ConnectMetricMetricCalculationCalculationComponentsOutputReference <a name="ConnectMetricMetricCalculationCalculationComponentsOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationCalculationComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.putMetricFilters">PutMetricFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricFilters">ResetMetricFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricId">ResetMetricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricFilters` <a name="PutMetricFilters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.putMetricFilters"></a>

```csharp
private void PutMetricFilters(IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.putMetricFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>[]

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetMetricFilters` <a name="ResetMetricFilters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricFilters"></a>

```csharp
private void ResetMetricFilters()
```

##### `ResetMetricId` <a name="ResetMetricId" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricId"></a>

```csharp
private void ResetMetricId()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.resetMetricName"></a>

```csharp
private void ResetMetricName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters">MetricFilters</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFiltersInput">MetricFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricIdInput">MetricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId">MetricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetricFilters`<sup>Required</sup> <a name="MetricFilters" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters"></a>

```csharp
public ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList MetricFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">ConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `MetricFiltersInput`<sup>Optional</sup> <a name="MetricFiltersInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFiltersInput"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponentsMetricFilters[] MetricFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsMetricFilters">ConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>[]

---

##### `MetricIdInput`<sup>Optional</sup> <a name="MetricIdInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricIdInput"></a>

```csharp
public string MetricIdInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `MetricId`<sup>Required</sup> <a name="MetricId" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId"></a>

```csharp
public string MetricId { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponents InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>

---


### ConnectMetricMetricCalculationOutputReference <a name="ConnectMetricMetricCalculationOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricMetricCalculationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.putCalculationComponents">PutCalculationComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resetCalculation">ResetCalculation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resetCalculationComponents">ResetCalculationComponents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCalculationComponents` <a name="PutCalculationComponents" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.putCalculationComponents"></a>

```csharp
private void PutCalculationComponents(IResolvable|ConnectMetricMetricCalculationCalculationComponents[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.putCalculationComponents.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>[]

---

##### `ResetCalculation` <a name="ResetCalculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resetCalculation"></a>

```csharp
private void ResetCalculation()
```

##### `ResetCalculationComponents` <a name="ResetCalculationComponents" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.resetCalculationComponents"></a>

```csharp
private void ResetCalculationComponents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationComponents">CalculationComponents</a></code> | <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList">ConnectMetricMetricCalculationCalculationComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationComponentsInput">CalculationComponentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationInput">CalculationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculation">Calculation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CalculationComponents`<sup>Required</sup> <a name="CalculationComponents" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationComponents"></a>

```csharp
public ConnectMetricMetricCalculationCalculationComponentsList CalculationComponents { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponentsList">ConnectMetricMetricCalculationCalculationComponentsList</a>

---

##### `CalculationComponentsInput`<sup>Optional</sup> <a name="CalculationComponentsInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationComponentsInput"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculationCalculationComponents[] CalculationComponentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationCalculationComponents">ConnectMetricMetricCalculationCalculationComponents</a>[]

---

##### `CalculationInput`<sup>Optional</sup> <a name="CalculationInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculationInput"></a>

```csharp
public string CalculationInput { get; }
```

- *Type:* string

---

##### `Calculation`<sup>Required</sup> <a name="Calculation" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.calculation"></a>

```csharp
public string Calculation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricMetricCalculation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricMetricCalculation">ConnectMetricMetricCalculation</a>

---


### ConnectMetricTagsList <a name="ConnectMetricTagsList" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.get"></a>

```csharp
private ConnectMetricTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>[]

---


### ConnectMetricTagsOutputReference <a name="ConnectMetricTagsOutputReference" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectMetricTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectMetric.ConnectMetricTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectMetricTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectMetric.ConnectMetricTags">ConnectMetricTags</a>

---



