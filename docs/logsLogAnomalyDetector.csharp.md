# `logsLogAnomalyDetector` Submodule <a name="`logsLogAnomalyDetector` Submodule" id="@cdktn/provider-awscc.logsLogAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsLogAnomalyDetector <a name="LogsLogAnomalyDetector" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector awscc_logs_log_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsLogAnomalyDetector(Construct Scope, string Id, LogsLogAnomalyDetectorConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig">LogsLogAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig">LogsLogAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime">ResetAnomalyVisibilityTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName">ResetDetectorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency">ResetEvaluationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern">ResetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList">ResetLogGroupArnList</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAnomalyVisibilityTime` <a name="ResetAnomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime"></a>

```csharp
private void ResetAnomalyVisibilityTime()
```

##### `ResetDetectorName` <a name="ResetDetectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName"></a>

```csharp
private void ResetDetectorName()
```

##### `ResetEvaluationFrequency` <a name="ResetEvaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency"></a>

```csharp
private void ResetEvaluationFrequency()
```

##### `ResetFilterPattern` <a name="ResetFilterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern"></a>

```csharp
private void ResetFilterPattern()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLogGroupArnList` <a name="ResetLogGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList"></a>

```csharp
private void ResetLogGroupArnList()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsLogAnomalyDetector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsLogAnomalyDetector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsLogAnomalyDetector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsLogAnomalyDetector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsLogAnomalyDetector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsLogAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LogsLogAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn">AnomalyDetectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus">AnomalyDetectorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp">CreationTimeStamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp">LastModifiedTimeStamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput">AnomalyVisibilityTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput">DetectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput">EvaluationFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput">FilterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput">LogGroupArnListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime">AnomalyVisibilityTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName">DetectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern">FilterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList">LogGroupArnList</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnomalyDetectorArn`<sup>Required</sup> <a name="AnomalyDetectorArn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn"></a>

```csharp
public string AnomalyDetectorArn { get; }
```

- *Type:* string

---

##### `AnomalyDetectorStatus`<sup>Required</sup> <a name="AnomalyDetectorStatus" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus"></a>

```csharp
public string AnomalyDetectorStatus { get; }
```

- *Type:* string

---

##### `CreationTimeStamp`<sup>Required</sup> <a name="CreationTimeStamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp"></a>

```csharp
public double CreationTimeStamp { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTimeStamp`<sup>Required</sup> <a name="LastModifiedTimeStamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp"></a>

```csharp
public double LastModifiedTimeStamp { get; }
```

- *Type:* double

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AnomalyVisibilityTimeInput`<sup>Optional</sup> <a name="AnomalyVisibilityTimeInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput"></a>

```csharp
public double AnomalyVisibilityTimeInput { get; }
```

- *Type:* double

---

##### `DetectorNameInput`<sup>Optional</sup> <a name="DetectorNameInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput"></a>

```csharp
public string DetectorNameInput { get; }
```

- *Type:* string

---

##### `EvaluationFrequencyInput`<sup>Optional</sup> <a name="EvaluationFrequencyInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput"></a>

```csharp
public string EvaluationFrequencyInput { get; }
```

- *Type:* string

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput"></a>

```csharp
public string FilterPatternInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LogGroupArnListInput`<sup>Optional</sup> <a name="LogGroupArnListInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput"></a>

```csharp
public string[] LogGroupArnListInput { get; }
```

- *Type:* string[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AnomalyVisibilityTime`<sup>Required</sup> <a name="AnomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime"></a>

```csharp
public double AnomalyVisibilityTime { get; }
```

- *Type:* double

---

##### `DetectorName`<sup>Required</sup> <a name="DetectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName"></a>

```csharp
public string DetectorName { get; }
```

- *Type:* string

---

##### `EvaluationFrequency`<sup>Required</sup> <a name="EvaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency"></a>

```csharp
public string EvaluationFrequency { get; }
```

- *Type:* string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern"></a>

```csharp
public string FilterPattern { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LogGroupArnList`<sup>Required</sup> <a name="LogGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList"></a>

```csharp
public string[] LogGroupArnList { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsLogAnomalyDetectorConfig <a name="LogsLogAnomalyDetectorConfig" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsLogAnomalyDetectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    double AnomalyVisibilityTime = null,
    string DetectorName = null,
    string EvaluationFrequency = null,
    string FilterPattern = null,
    string KmsKeyId = null,
    string[] LogGroupArnList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account ID for owner of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime">AnomalyVisibilityTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName">DetectorName</a></code> | <code>string</code> | Name of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>string</code> | How often log group is evaluated. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern">FilterPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList">LogGroupArnList</a></code> | <code>string[]</code> | List of Arns for the given log group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account ID for owner of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#account_id LogsLogAnomalyDetector#account_id}

---

##### `AnomalyVisibilityTime`<sup>Optional</sup> <a name="AnomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime"></a>

```csharp
public double AnomalyVisibilityTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}.

---

##### `DetectorName`<sup>Optional</sup> <a name="DetectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName"></a>

```csharp
public string DetectorName { get; set; }
```

- *Type:* string

Name of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#detector_name LogsLogAnomalyDetector#detector_name}

---

##### `EvaluationFrequency`<sup>Optional</sup> <a name="EvaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency"></a>

```csharp
public string EvaluationFrequency { get; set; }
```

- *Type:* string

How often log group is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#evaluation_frequency LogsLogAnomalyDetector#evaluation_frequency}

---

##### `FilterPattern`<sup>Optional</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern"></a>

```csharp
public string FilterPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#kms_key_id LogsLogAnomalyDetector#kms_key_id}

---

##### `LogGroupArnList`<sup>Optional</sup> <a name="LogGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList"></a>

```csharp
public string[] LogGroupArnList { get; set; }
```

- *Type:* string[]

List of Arns for the given log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_log_anomaly_detector#log_group_arn_list LogsLogAnomalyDetector#log_group_arn_list}

---



