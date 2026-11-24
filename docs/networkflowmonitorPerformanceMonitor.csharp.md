# `networkflowmonitorPerformanceMonitor` Submodule <a name="`networkflowmonitorPerformanceMonitor` Submodule" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorPerformanceMonitor <a name="NetworkflowmonitorPerformanceMonitor" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor awscc_networkflowmonitor_performance_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorPerformanceMonitor(Construct Scope, string Id, NetworkflowmonitorPerformanceMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig">NetworkflowmonitorPerformanceMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig">NetworkflowmonitorPerformanceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetScopeArn">ResetScopeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworkflowmonitorPerformanceMonitorTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>[]

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets"></a>

```csharp
private void PutTargets(IResolvable|NetworkflowmonitorPerformanceMonitorTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>[]

---

##### `ResetScopeArn` <a name="ResetScopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetScopeArn"></a>

```csharp
private void ResetScopeArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkflowmonitorPerformanceMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkflowmonitorPerformanceMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkflowmonitorPerformanceMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkflowmonitorPerformanceMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkflowmonitorPerformanceMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkflowmonitorPerformanceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorPerformanceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorStatus">MonitorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorType">MonitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList">NetworkflowmonitorPerformanceMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList">NetworkflowmonitorPerformanceMonitorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorNameInput">MonitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArnInput">ScopeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorName">MonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArn">ScopeArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `MonitorStatus`<sup>Required</sup> <a name="MonitorStatus" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorStatus"></a>

```csharp
public string MonitorStatus { get; }
```

- *Type:* string

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorType"></a>

```csharp
public string MonitorType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tags"></a>

```csharp
public NetworkflowmonitorPerformanceMonitorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList">NetworkflowmonitorPerformanceMonitorTagsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targets"></a>

```csharp
public NetworkflowmonitorPerformanceMonitorTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList">NetworkflowmonitorPerformanceMonitorTargetsList</a>

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorNameInput"></a>

```csharp
public string MonitorNameInput { get; }
```

- *Type:* string

---

##### `ScopeArnInput`<sup>Optional</sup> <a name="ScopeArnInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArnInput"></a>

```csharp
public string ScopeArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tagsInput"></a>

```csharp
public IResolvable|NetworkflowmonitorPerformanceMonitorTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>[]

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targetsInput"></a>

```csharp
public IResolvable|NetworkflowmonitorPerformanceMonitorTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>[]

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorName"></a>

```csharp
public string MonitorName { get; }
```

- *Type:* string

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArn"></a>

```csharp
public string ScopeArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorPerformanceMonitorConfig <a name="NetworkflowmonitorPerformanceMonitorConfig" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorPerformanceMonitorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MonitorName,
    IResolvable|NetworkflowmonitorPerformanceMonitorTargets[] Targets,
    string ScopeArn = null,
    IResolvable|NetworkflowmonitorPerformanceMonitorTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.monitorName">MonitorName</a></code> | <code>string</code> | The name of the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>[]</code> | The targets that are monitored by the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.scopeArn">ScopeArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the scope for the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>[]</code> | The tags for the performance monitor. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.monitorName"></a>

```csharp
public string MonitorName { get; set; }
```

- *Type:* string

The name of the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#monitor_name NetworkflowmonitorPerformanceMonitor#monitor_name}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.targets"></a>

```csharp
public IResolvable|NetworkflowmonitorPerformanceMonitorTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>[]

The targets that are monitored by the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#targets NetworkflowmonitorPerformanceMonitor#targets}

---

##### `ScopeArn`<sup>Optional</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.scopeArn"></a>

```csharp
public string ScopeArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the scope for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#scope_arn NetworkflowmonitorPerformanceMonitor#scope_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.tags"></a>

```csharp
public IResolvable|NetworkflowmonitorPerformanceMonitorTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>[]

The tags for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#tags NetworkflowmonitorPerformanceMonitor#tags}

---

### NetworkflowmonitorPerformanceMonitorTags <a name="NetworkflowmonitorPerformanceMonitorTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorPerformanceMonitorTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#key NetworkflowmonitorPerformanceMonitor#key}. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#value NetworkflowmonitorPerformanceMonitor#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#key NetworkflowmonitorPerformanceMonitor#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#value NetworkflowmonitorPerformanceMonitor#value}.

---

### NetworkflowmonitorPerformanceMonitorTargets <a name="NetworkflowmonitorPerformanceMonitorTargets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorPerformanceMonitorTargets {
    string Identifier,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.identifier">Identifier</a></code> | <code>string</code> | The identifier of the target. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.type">Type</a></code> | <code>string</code> | The type of the target. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

The identifier of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#identifier NetworkflowmonitorPerformanceMonitor#identifier}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#type NetworkflowmonitorPerformanceMonitor#type}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorPerformanceMonitorTagsList <a name="NetworkflowmonitorPerformanceMonitorTagsList" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorPerformanceMonitorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get"></a>

```csharp
private NetworkflowmonitorPerformanceMonitorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorPerformanceMonitorTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>[]

---


### NetworkflowmonitorPerformanceMonitorTagsOutputReference <a name="NetworkflowmonitorPerformanceMonitorTagsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorPerformanceMonitorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorPerformanceMonitorTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>

---


### NetworkflowmonitorPerformanceMonitorTargetsList <a name="NetworkflowmonitorPerformanceMonitorTargetsList" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorPerformanceMonitorTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get"></a>

```csharp
private NetworkflowmonitorPerformanceMonitorTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorPerformanceMonitorTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>[]

---


### NetworkflowmonitorPerformanceMonitorTargetsOutputReference <a name="NetworkflowmonitorPerformanceMonitorTargetsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkflowmonitorPerformanceMonitorTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorPerformanceMonitorTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>

---



