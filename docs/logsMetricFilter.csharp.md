# `logsMetricFilter` Submodule <a name="`logsMetricFilter` Submodule" id="@cdktn/provider-awscc.logsMetricFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsMetricFilter <a name="LogsMetricFilter" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter awscc_logs_metric_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsMetricFilter(Construct Scope, string Id, LogsMetricFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig">LogsMetricFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig">LogsMetricFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations">PutMetricTransformations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs">ResetApplyOnTransformedLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions">ResetEmitSystemFieldDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria">ResetFieldSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName">ResetFilterName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricTransformations` <a name="PutMetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations"></a>

```csharp
private void PutMetricTransformations(IResolvable|LogsMetricFilterMetricTransformations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]

---

##### `ResetApplyOnTransformedLogs` <a name="ResetApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs"></a>

```csharp
private void ResetApplyOnTransformedLogs()
```

##### `ResetEmitSystemFieldDimensions` <a name="ResetEmitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions"></a>

```csharp
private void ResetEmitSystemFieldDimensions()
```

##### `ResetFieldSelectionCriteria` <a name="ResetFieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria"></a>

```csharp
private void ResetFieldSelectionCriteria()
```

##### `ResetFilterName` <a name="ResetFilterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName"></a>

```csharp
private void ResetFilterName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsMetricFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsMetricFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsMetricFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsMetricFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsMetricFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsMetricFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LogsMetricFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations">MetricTransformations</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput">ApplyOnTransformedLogsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput">EmitSystemFieldDimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput">FieldSelectionCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput">FilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput">FilterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput">MetricTransformationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs">ApplyOnTransformedLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions">EmitSystemFieldDimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria">FieldSelectionCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName">FilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern">FilterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricTransformations`<sup>Required</sup> <a name="MetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations"></a>

```csharp
public LogsMetricFilterMetricTransformationsList MetricTransformations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a>

---

##### `ApplyOnTransformedLogsInput`<sup>Optional</sup> <a name="ApplyOnTransformedLogsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput"></a>

```csharp
public bool|IResolvable ApplyOnTransformedLogsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EmitSystemFieldDimensionsInput`<sup>Optional</sup> <a name="EmitSystemFieldDimensionsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput"></a>

```csharp
public string[] EmitSystemFieldDimensionsInput { get; }
```

- *Type:* string[]

---

##### `FieldSelectionCriteriaInput`<sup>Optional</sup> <a name="FieldSelectionCriteriaInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput"></a>

```csharp
public string FieldSelectionCriteriaInput { get; }
```

- *Type:* string

---

##### `FilterNameInput`<sup>Optional</sup> <a name="FilterNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput"></a>

```csharp
public string FilterNameInput { get; }
```

- *Type:* string

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput"></a>

```csharp
public string FilterPatternInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `MetricTransformationsInput`<sup>Optional</sup> <a name="MetricTransformationsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput"></a>

```csharp
public IResolvable|LogsMetricFilterMetricTransformations[] MetricTransformationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]

---

##### `ApplyOnTransformedLogs`<sup>Required</sup> <a name="ApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs"></a>

```csharp
public bool|IResolvable ApplyOnTransformedLogs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EmitSystemFieldDimensions`<sup>Required</sup> <a name="EmitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions"></a>

```csharp
public string[] EmitSystemFieldDimensions { get; }
```

- *Type:* string[]

---

##### `FieldSelectionCriteria`<sup>Required</sup> <a name="FieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria"></a>

```csharp
public string FieldSelectionCriteria { get; }
```

- *Type:* string

---

##### `FilterName`<sup>Required</sup> <a name="FilterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName"></a>

```csharp
public string FilterName { get; }
```

- *Type:* string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern"></a>

```csharp
public string FilterPattern { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsMetricFilterConfig <a name="LogsMetricFilterConfig" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsMetricFilterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FilterPattern,
    string LogGroupName,
    IResolvable|LogsMetricFilterMetricTransformations[] MetricTransformations,
    bool|IResolvable ApplyOnTransformedLogs = null,
    string[] EmitSystemFieldDimensions = null,
    string FieldSelectionCriteria = null,
    string FilterName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern">FilterPattern</a></code> | <code>string</code> | A filter pattern for extracting metric data out of ingested log events. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName">LogGroupName</a></code> | <code>string</code> | The name of an existing log group that you want to associate with this metric filter. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations">MetricTransformations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]</code> | The metric transformations. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs">ApplyOnTransformedLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions">EmitSystemFieldDimensions</a></code> | <code>string[]</code> | The list of system fields that are emitted as additional dimensions in the generated metrics. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria">FieldSelectionCriteria</a></code> | <code>string</code> | The filter expression that specifies which log events are processed by this metric filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName">FilterName</a></code> | <code>string</code> | The name of the metric filter. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern"></a>

```csharp
public string FilterPattern { get; set; }
```

- *Type:* string

A filter pattern for extracting metric data out of ingested log events.

For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#filter_pattern LogsMetricFilter#filter_pattern}

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

The name of an existing log group that you want to associate with this metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#log_group_name LogsMetricFilter#log_group_name}

---

##### `MetricTransformations`<sup>Required</sup> <a name="MetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations"></a>

```csharp
public IResolvable|LogsMetricFilterMetricTransformations[] MetricTransformations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]

The metric transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#metric_transformations LogsMetricFilter#metric_transformations}

---

##### `ApplyOnTransformedLogs`<sup>Optional</sup> <a name="ApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs"></a>

```csharp
public bool|IResolvable ApplyOnTransformedLogs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
If this value is `true`, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#apply_on_transformed_logs LogsMetricFilter#apply_on_transformed_logs}

---

##### `EmitSystemFieldDimensions`<sup>Optional</sup> <a name="EmitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions"></a>

```csharp
public string[] EmitSystemFieldDimensions { get; set; }
```

- *Type:* string[]

The list of system fields that are emitted as additional dimensions in the generated metrics.

Returns the `emitSystemFieldDimensions` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#emit_system_field_dimensions LogsMetricFilter#emit_system_field_dimensions}

---

##### `FieldSelectionCriteria`<sup>Optional</sup> <a name="FieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria"></a>

```csharp
public string FieldSelectionCriteria { get; set; }
```

- *Type:* string

The filter expression that specifies which log events are processed by this metric filter based on system fields.

Returns the `fieldSelectionCriteria` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#field_selection_criteria LogsMetricFilter#field_selection_criteria}

---

##### `FilterName`<sup>Optional</sup> <a name="FilterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName"></a>

```csharp
public string FilterName { get; set; }
```

- *Type:* string

The name of the metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#filter_name LogsMetricFilter#filter_name}

---

### LogsMetricFilterMetricTransformations <a name="LogsMetricFilterMetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsMetricFilterMetricTransformations {
    string MetricName,
    string MetricNamespace,
    string MetricValue,
    double DefaultValue = null,
    IResolvable|LogsMetricFilterMetricTransformationsDimensions[] Dimensions = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName">MetricName</a></code> | <code>string</code> | The name of the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | A custom namespace to contain your metric in CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue">MetricValue</a></code> | <code>string</code> | The value that is published to the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue">DefaultValue</a></code> | <code>double</code> | (Optional) The value to emit when a filter pattern does not match a log event. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions">Dimensions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]</code> | The fields to use as dimensions for the metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit">Unit</a></code> | <code>string</code> | The unit to assign to the metric. If you omit this, the unit is set as ``None``. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

The name of the CloudWatch metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#metric_name LogsMetricFilter#metric_name}

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; set; }
```

- *Type:* string

A custom namespace to contain your metric in CloudWatch.

Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#metric_namespace LogsMetricFilter#metric_namespace}

---

##### `MetricValue`<sup>Required</sup> <a name="MetricValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue"></a>

```csharp
public string MetricValue { get; set; }
```

- *Type:* string

The value that is published to the CloudWatch metric.

For example, if you're counting the occurrences of a particular term like `Error`, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as `$.size`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#metric_value LogsMetricFilter#metric_value}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue"></a>

```csharp
public double DefaultValue { get; set; }
```

- *Type:* double

(Optional) The value to emit when a filter pattern does not match a log event.

This value can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#default_value LogsMetricFilter#default_value}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions"></a>

```csharp
public IResolvable|LogsMetricFilterMetricTransformationsDimensions[] Dimensions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]

The fields to use as dimensions for the metric.

One metric filter can include as many as three dimensions.
Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#dimensions LogsMetricFilter#dimensions}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The unit to assign to the metric. If you omit this, the unit is set as ``None``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#unit LogsMetricFilter#unit}

---

### LogsMetricFilterMetricTransformationsDimensions <a name="LogsMetricFilterMetricTransformationsDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsMetricFilterMetricTransformationsDimensions {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key">Key</a></code> | <code>string</code> | The name for the CW metric dimension that the metric filter creates. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value">Value</a></code> | <code>string</code> | The log event field that will contain the value for this dimension. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name for the CW metric dimension that the metric filter creates.

Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#key LogsMetricFilter#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The log event field that will contain the value for this dimension.

This dimension will only be published for a metric if the value is found in the log event. For example, `$.eventType` for JSON log events, or `$server` for space-delimited log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_metric_filter#value LogsMetricFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsMetricFilterMetricTransformationsDimensionsList <a name="LogsMetricFilterMetricTransformationsDimensionsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsMetricFilterMetricTransformationsDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get"></a>

```csharp
private LogsMetricFilterMetricTransformationsDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue"></a>

```csharp
public IResolvable|LogsMetricFilterMetricTransformationsDimensions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]

---


### LogsMetricFilterMetricTransformationsDimensionsOutputReference <a name="LogsMetricFilterMetricTransformationsDimensionsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsMetricFilterMetricTransformationsDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogsMetricFilterMetricTransformationsDimensions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>

---


### LogsMetricFilterMetricTransformationsList <a name="LogsMetricFilterMetricTransformationsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsMetricFilterMetricTransformationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get"></a>

```csharp
private LogsMetricFilterMetricTransformationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue"></a>

```csharp
public IResolvable|LogsMetricFilterMetricTransformations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>[]

---


### LogsMetricFilterMetricTransformationsOutputReference <a name="LogsMetricFilterMetricTransformationsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsMetricFilterMetricTransformationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions"></a>

```csharp
private void PutDimensions(IResolvable|LogsMetricFilterMetricTransformationsDimensions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput">MetricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput">MetricValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue">MetricValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions"></a>

```csharp
public LogsMetricFilterMetricTransformationsDimensionsList Dimensions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput"></a>

```csharp
public double DefaultValueInput { get; }
```

- *Type:* double

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput"></a>

```csharp
public IResolvable|LogsMetricFilterMetricTransformationsDimensions[] DimensionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>[]

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `MetricNamespaceInput`<sup>Optional</sup> <a name="MetricNamespaceInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput"></a>

```csharp
public string MetricNamespaceInput { get; }
```

- *Type:* string

---

##### `MetricValueInput`<sup>Optional</sup> <a name="MetricValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput"></a>

```csharp
public string MetricValueInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue"></a>

```csharp
public double DefaultValue { get; }
```

- *Type:* double

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; }
```

- *Type:* string

---

##### `MetricValue`<sup>Required</sup> <a name="MetricValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue"></a>

```csharp
public string MetricValue { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogsMetricFilterMetricTransformations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>

---



