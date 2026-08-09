# `logsSubscriptionFilter` Submodule <a name="`logsSubscriptionFilter` Submodule" id="@cdktn/provider-awscc.logsSubscriptionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsSubscriptionFilter <a name="LogsSubscriptionFilter" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter awscc_logs_subscription_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsSubscriptionFilter(Construct Scope, string Id, LogsSubscriptionFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig">LogsSubscriptionFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig">LogsSubscriptionFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetApplyOnTransformedLogs">ResetApplyOnTransformedLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetDistribution">ResetDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetEmitSystemFields">ResetEmitSystemFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFieldSelectionCriteria">ResetFieldSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFilterName">ResetFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApplyOnTransformedLogs` <a name="ResetApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetApplyOnTransformedLogs"></a>

```csharp
private void ResetApplyOnTransformedLogs()
```

##### `ResetDistribution` <a name="ResetDistribution" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetDistribution"></a>

```csharp
private void ResetDistribution()
```

##### `ResetEmitSystemFields` <a name="ResetEmitSystemFields" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetEmitSystemFields"></a>

```csharp
private void ResetEmitSystemFields()
```

##### `ResetFieldSelectionCriteria` <a name="ResetFieldSelectionCriteria" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFieldSelectionCriteria"></a>

```csharp
private void ResetFieldSelectionCriteria()
```

##### `ResetFilterName` <a name="ResetFilterName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetFilterName"></a>

```csharp
private void ResetFilterName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsSubscriptionFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsSubscriptionFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsSubscriptionFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsSubscriptionFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsSubscriptionFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LogsSubscriptionFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsSubscriptionFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsSubscriptionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LogsSubscriptionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogsInput">ApplyOnTransformedLogsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distributionInput">DistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFieldsInput">EmitSystemFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteriaInput">FieldSelectionCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterNameInput">FilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPatternInput">FilterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogs">ApplyOnTransformedLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distribution">Distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFields">EmitSystemFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteria">FieldSelectionCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterName">FilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPattern">FilterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ApplyOnTransformedLogsInput`<sup>Optional</sup> <a name="ApplyOnTransformedLogsInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogsInput"></a>

```csharp
public bool|IResolvable ApplyOnTransformedLogsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `DistributionInput`<sup>Optional</sup> <a name="DistributionInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distributionInput"></a>

```csharp
public string DistributionInput { get; }
```

- *Type:* string

---

##### `EmitSystemFieldsInput`<sup>Optional</sup> <a name="EmitSystemFieldsInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFieldsInput"></a>

```csharp
public string[] EmitSystemFieldsInput { get; }
```

- *Type:* string[]

---

##### `FieldSelectionCriteriaInput`<sup>Optional</sup> <a name="FieldSelectionCriteriaInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteriaInput"></a>

```csharp
public string FieldSelectionCriteriaInput { get; }
```

- *Type:* string

---

##### `FilterNameInput`<sup>Optional</sup> <a name="FilterNameInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterNameInput"></a>

```csharp
public string FilterNameInput { get; }
```

- *Type:* string

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPatternInput"></a>

```csharp
public string FilterPatternInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ApplyOnTransformedLogs`<sup>Required</sup> <a name="ApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.applyOnTransformedLogs"></a>

```csharp
public bool|IResolvable ApplyOnTransformedLogs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.distribution"></a>

```csharp
public string Distribution { get; }
```

- *Type:* string

---

##### `EmitSystemFields`<sup>Required</sup> <a name="EmitSystemFields" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.emitSystemFields"></a>

```csharp
public string[] EmitSystemFields { get; }
```

- *Type:* string[]

---

##### `FieldSelectionCriteria`<sup>Required</sup> <a name="FieldSelectionCriteria" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.fieldSelectionCriteria"></a>

```csharp
public string FieldSelectionCriteria { get; }
```

- *Type:* string

---

##### `FilterName`<sup>Required</sup> <a name="FilterName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterName"></a>

```csharp
public string FilterName { get; }
```

- *Type:* string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.filterPattern"></a>

```csharp
public string FilterPattern { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsSubscriptionFilterConfig <a name="LogsSubscriptionFilterConfig" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsSubscriptionFilterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DestinationArn,
    string FilterPattern,
    string LogGroupName,
    bool|IResolvable ApplyOnTransformedLogs = null,
    string Distribution = null,
    string[] EmitSystemFields = null,
    string FieldSelectionCriteria = null,
    string FilterName = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.destinationArn">DestinationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the destination. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterPattern">FilterPattern</a></code> | <code>string</code> | The filtering expressions that restrict what gets delivered to the destination AWS resource. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.logGroupName">LogGroupName</a></code> | <code>string</code> | The log group to associate with the subscription filter. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.applyOnTransformedLogs">ApplyOnTransformedLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.distribution">Distribution</a></code> | <code>string</code> | The method used to distribute log data to the destination, which can be either random or grouped by log stream. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.emitSystemFields">EmitSystemFields</a></code> | <code>string[]</code> | The list of system fields that are included in the log events sent to the subscription destination. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.fieldSelectionCriteria">FieldSelectionCriteria</a></code> | <code>string</code> | The filter expression that specifies which log events are processed by this subscription filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterName">FilterName</a></code> | <code>string</code> | The name of the subscription filter. |
| <code><a href="#@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of an IAM role that grants CWL permissions to deliver ingested log events to the destination stream. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#destination_arn LogsSubscriptionFilter#destination_arn}

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterPattern"></a>

```csharp
public string FilterPattern { get; set; }
```

- *Type:* string

The filtering expressions that restrict what gets delivered to the destination AWS resource.

For more information about the filter pattern syntax, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#filter_pattern LogsSubscriptionFilter#filter_pattern}

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

The log group to associate with the subscription filter.

All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#log_group_name LogsSubscriptionFilter#log_group_name}

---

##### `ApplyOnTransformedLogs`<sup>Optional</sup> <a name="ApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.applyOnTransformedLogs"></a>

```csharp
public bool|IResolvable ApplyOnTransformedLogs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
If this value is `true`, the subscription filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#apply_on_transformed_logs LogsSubscriptionFilter#apply_on_transformed_logs}

---

##### `Distribution`<sup>Optional</sup> <a name="Distribution" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.distribution"></a>

```csharp
public string Distribution { get; set; }
```

- *Type:* string

The method used to distribute log data to the destination, which can be either random or grouped by log stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#distribution LogsSubscriptionFilter#distribution}

---

##### `EmitSystemFields`<sup>Optional</sup> <a name="EmitSystemFields" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.emitSystemFields"></a>

```csharp
public string[] EmitSystemFields { get; set; }
```

- *Type:* string[]

The list of system fields that are included in the log events sent to the subscription destination.

Returns the `emitSystemFields` value if it was specified when the subscription filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#emit_system_fields LogsSubscriptionFilter#emit_system_fields}

---

##### `FieldSelectionCriteria`<sup>Optional</sup> <a name="FieldSelectionCriteria" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.fieldSelectionCriteria"></a>

```csharp
public string FieldSelectionCriteria { get; set; }
```

- *Type:* string

The filter expression that specifies which log events are processed by this subscription filter based on system fields.

Returns the `fieldSelectionCriteria` value if it was specified when the subscription filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#field_selection_criteria LogsSubscriptionFilter#field_selection_criteria}

---

##### `FilterName`<sup>Optional</sup> <a name="FilterName" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.filterName"></a>

```csharp
public string FilterName { get; set; }
```

- *Type:* string

The name of the subscription filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#filter_name LogsSubscriptionFilter#filter_name}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.logsSubscriptionFilter.LogsSubscriptionFilterConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of an IAM role that grants CWL permissions to deliver ingested log events to the destination stream.

You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_subscription_filter#role_arn LogsSubscriptionFilter#role_arn}

---



