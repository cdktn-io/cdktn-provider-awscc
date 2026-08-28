# `medialiveCloudwatchAlarmTemplate` Submodule <a name="`medialiveCloudwatchAlarmTemplate` Submodule" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveCloudwatchAlarmTemplate <a name="MedialiveCloudwatchAlarmTemplate" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template awscc_medialive_cloudwatch_alarm_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveCloudwatchAlarmTemplate(Construct Scope, string Id, MedialiveCloudwatchAlarmTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig">MedialiveCloudwatchAlarmTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig">MedialiveCloudwatchAlarmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm">ResetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier">ResetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDatapointsToAlarm` <a name="ResetDatapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm"></a>

```csharp
private void ResetDatapointsToAlarm()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods"></a>

```csharp
private void ResetEvaluationPeriods()
```

##### `ResetGroupIdentifier` <a name="ResetGroupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier"></a>

```csharp
private void ResetGroupIdentifier()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold"></a>

```csharp
private void ResetThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveCloudwatchAlarmTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveCloudwatchAlarmTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveCloudwatchAlarmTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveCloudwatchAlarmTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveCloudwatchAlarmTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveCloudwatchAlarmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveCloudwatchAlarmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId">CloudwatchAlarmTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput">DatapointsToAlarmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput">GroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput">TreatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchAlarmTemplateId`<sup>Required</sup> <a name="CloudwatchAlarmTemplateId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId"></a>

```csharp
public string CloudwatchAlarmTemplateId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `DatapointsToAlarmInput`<sup>Optional</sup> <a name="DatapointsToAlarmInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput"></a>

```csharp
public double DatapointsToAlarmInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `GroupIdentifierInput`<sup>Optional</sup> <a name="GroupIdentifierInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput"></a>

```csharp
public string GroupIdentifierInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput"></a>

```csharp
public string TargetResourceTypeInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `TreatMissingDataInput`<sup>Optional</sup> <a name="TreatMissingDataInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput"></a>

```csharp
public string TreatMissingDataInput { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `DatapointsToAlarm`<sup>Required</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm"></a>

```csharp
public double DatapointsToAlarm { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveCloudwatchAlarmTemplateConfig <a name="MedialiveCloudwatchAlarmTemplateConfig" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveCloudwatchAlarmTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ComparisonOperator,
    string MetricName,
    string Name,
    string Statistic,
    string TargetResourceType,
    string TreatMissingData,
    double DatapointsToAlarm = null,
    string Description = null,
    double EvaluationPeriods = null,
    string GroupIdentifier = null,
    double Period = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The comparison operator used to compare the specified statistic and the threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName">MetricName</a></code> | <code>string</code> | The name of the metric associated with the alarm. Must be compatible with targetResourceType. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name">Name</a></code> | <code>string</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic">Statistic</a></code> | <code>string</code> | The statistic to apply to the alarm's metric data. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | The resource type this template should dynamically generate cloudwatch metric alarms for. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | Specifies how missing data points are treated when evaluating the alarm's condition. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>double</code> | The number of datapoints within the evaluation period that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description">Description</a></code> | <code>string</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | A cloudwatch alarm template group's identifier. Can be either be its id or current name. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period">Period</a></code> | <code>double</code> | The period, in seconds, over which the specified statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Represents the tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold">Threshold</a></code> | <code>double</code> | The threshold value to compare with the specified statistic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The comparison operator used to compare the specified statistic and the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#comparison_operator MedialiveCloudwatchAlarmTemplate#comparison_operator}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

The name of the metric associated with the alarm. Must be compatible with targetResourceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#metric_name MedialiveCloudwatchAlarmTemplate#metric_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#name MedialiveCloudwatchAlarmTemplate#name}

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

The statistic to apply to the alarm's metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#statistic MedialiveCloudwatchAlarmTemplate#statistic}

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; set; }
```

- *Type:* string

The resource type this template should dynamically generate cloudwatch metric alarms for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#target_resource_type MedialiveCloudwatchAlarmTemplate#target_resource_type}

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; set; }
```

- *Type:* string

Specifies how missing data points are treated when evaluating the alarm's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#treat_missing_data MedialiveCloudwatchAlarmTemplate#treat_missing_data}

---

##### `DatapointsToAlarm`<sup>Optional</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm"></a>

```csharp
public double DatapointsToAlarm { get; set; }
```

- *Type:* double

The number of datapoints within the evaluation period that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#datapoints_to_alarm MedialiveCloudwatchAlarmTemplate#datapoints_to_alarm}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#description MedialiveCloudwatchAlarmTemplate#description}

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

The number of periods over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#evaluation_periods MedialiveCloudwatchAlarmTemplate#evaluation_periods}

---

##### `GroupIdentifier`<sup>Optional</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; set; }
```

- *Type:* string

A cloudwatch alarm template group's identifier. Can be either be its id or current name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#group_identifier MedialiveCloudwatchAlarmTemplate#group_identifier}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

The period, in seconds, over which the specified statistic is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#period MedialiveCloudwatchAlarmTemplate#period}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#tags MedialiveCloudwatchAlarmTemplate#tags}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The threshold value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#threshold MedialiveCloudwatchAlarmTemplate#threshold}

---



