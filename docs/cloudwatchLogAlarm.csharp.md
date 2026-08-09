# `cloudwatchLogAlarm` Submodule <a name="`cloudwatchLogAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchLogAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogAlarm <a name="CloudwatchLogAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarm(Construct Scope, string Id, CloudwatchLogAlarmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig">CloudwatchLogAlarmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig">CloudwatchLogAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration">PutScheduledQueryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount">ResetActionLogLineCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn">ResetActionLogLineRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled">ResetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions">ResetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription">ResetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName">ResetAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions">ResetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions">ResetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData">ResetTreatMissingData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScheduledQueryConfiguration` <a name="PutScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration"></a>

```csharp
private void PutScheduledQueryConfiguration(CloudwatchLogAlarmScheduledQueryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudwatchLogAlarmTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]

---

##### `ResetActionLogLineCount` <a name="ResetActionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount"></a>

```csharp
private void ResetActionLogLineCount()
```

##### `ResetActionLogLineRoleArn` <a name="ResetActionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn"></a>

```csharp
private void ResetActionLogLineRoleArn()
```

##### `ResetActionsEnabled` <a name="ResetActionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled"></a>

```csharp
private void ResetActionsEnabled()
```

##### `ResetAlarmActions` <a name="ResetAlarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions"></a>

```csharp
private void ResetAlarmActions()
```

##### `ResetAlarmDescription` <a name="ResetAlarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription"></a>

```csharp
private void ResetAlarmDescription()
```

##### `ResetAlarmName` <a name="ResetAlarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName"></a>

```csharp
private void ResetAlarmName()
```

##### `ResetInsufficientDataActions` <a name="ResetInsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions"></a>

```csharp
private void ResetInsufficientDataActions()
```

##### `ResetOkActions` <a name="ResetOkActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions"></a>

```csharp
private void ResetOkActions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTreatMissingData` <a name="ResetTreatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData"></a>

```csharp
private void ResetTreatMissingData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchLogAlarm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchLogAlarm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchLogAlarm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudwatchLogAlarm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchLogAlarm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchLogAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration">ScheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput">ActionLogLineCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput">ActionLogLineRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput">ActionsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput">AlarmActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput">AlarmDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput">AlarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput">InsufficientDataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput">OkActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput">QueryResultsToAlarmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput">QueryResultsToEvaluateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput">ScheduledQueryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput">TreatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount">ActionLogLineCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn">ActionLogLineRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled">ActionsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions">AlarmActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription">AlarmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName">AlarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions">OkActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm">QueryResultsToAlarm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate">QueryResultsToEvaluate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScheduledQueryConfiguration`<sup>Required</sup> <a name="ScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration"></a>

```csharp
public CloudwatchLogAlarmScheduledQueryConfigurationOutputReference ScheduledQueryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags"></a>

```csharp
public CloudwatchLogAlarmTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a>

---

##### `ActionLogLineCountInput`<sup>Optional</sup> <a name="ActionLogLineCountInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput"></a>

```csharp
public double ActionLogLineCountInput { get; }
```

- *Type:* double

---

##### `ActionLogLineRoleArnInput`<sup>Optional</sup> <a name="ActionLogLineRoleArnInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput"></a>

```csharp
public string ActionLogLineRoleArnInput { get; }
```

- *Type:* string

---

##### `ActionsEnabledInput`<sup>Optional</sup> <a name="ActionsEnabledInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput"></a>

```csharp
public bool|IResolvable ActionsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlarmActionsInput`<sup>Optional</sup> <a name="AlarmActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput"></a>

```csharp
public string[] AlarmActionsInput { get; }
```

- *Type:* string[]

---

##### `AlarmDescriptionInput`<sup>Optional</sup> <a name="AlarmDescriptionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput"></a>

```csharp
public string AlarmDescriptionInput { get; }
```

- *Type:* string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput"></a>

```csharp
public string AlarmNameInput { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `InsufficientDataActionsInput`<sup>Optional</sup> <a name="InsufficientDataActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput"></a>

```csharp
public string[] InsufficientDataActionsInput { get; }
```

- *Type:* string[]

---

##### `OkActionsInput`<sup>Optional</sup> <a name="OkActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput"></a>

```csharp
public string[] OkActionsInput { get; }
```

- *Type:* string[]

---

##### `QueryResultsToAlarmInput`<sup>Optional</sup> <a name="QueryResultsToAlarmInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput"></a>

```csharp
public double QueryResultsToAlarmInput { get; }
```

- *Type:* double

---

##### `QueryResultsToEvaluateInput`<sup>Optional</sup> <a name="QueryResultsToEvaluateInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput"></a>

```csharp
public double QueryResultsToEvaluateInput { get; }
```

- *Type:* double

---

##### `ScheduledQueryConfigurationInput`<sup>Optional</sup> <a name="ScheduledQueryConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput"></a>

```csharp
public IResolvable|CloudwatchLogAlarmScheduledQueryConfiguration ScheduledQueryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput"></a>

```csharp
public IResolvable|CloudwatchLogAlarmTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `TreatMissingDataInput`<sup>Optional</sup> <a name="TreatMissingDataInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput"></a>

```csharp
public string TreatMissingDataInput { get; }
```

- *Type:* string

---

##### `ActionLogLineCount`<sup>Required</sup> <a name="ActionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount"></a>

```csharp
public double ActionLogLineCount { get; }
```

- *Type:* double

---

##### `ActionLogLineRoleArn`<sup>Required</sup> <a name="ActionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn"></a>

```csharp
public string ActionLogLineRoleArn { get; }
```

- *Type:* string

---

##### `ActionsEnabled`<sup>Required</sup> <a name="ActionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled"></a>

```csharp
public bool|IResolvable ActionsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlarmActions`<sup>Required</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions"></a>

```csharp
public string[] AlarmActions { get; }
```

- *Type:* string[]

---

##### `AlarmDescription`<sup>Required</sup> <a name="AlarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription"></a>

```csharp
public string AlarmDescription { get; }
```

- *Type:* string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName"></a>

```csharp
public string AlarmName { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `InsufficientDataActions`<sup>Required</sup> <a name="InsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions"></a>

```csharp
public string[] InsufficientDataActions { get; }
```

- *Type:* string[]

---

##### `OkActions`<sup>Required</sup> <a name="OkActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions"></a>

```csharp
public string[] OkActions { get; }
```

- *Type:* string[]

---

##### `QueryResultsToAlarm`<sup>Required</sup> <a name="QueryResultsToAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm"></a>

```csharp
public double QueryResultsToAlarm { get; }
```

- *Type:* double

---

##### `QueryResultsToEvaluate`<sup>Required</sup> <a name="QueryResultsToEvaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate"></a>

```csharp
public double QueryResultsToEvaluate { get; }
```

- *Type:* double

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogAlarmConfig <a name="CloudwatchLogAlarmConfig" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ComparisonOperator,
    double QueryResultsToAlarm,
    double QueryResultsToEvaluate,
    CloudwatchLogAlarmScheduledQueryConfiguration ScheduledQueryConfiguration,
    double Threshold,
    double ActionLogLineCount = null,
    string ActionLogLineRoleArn = null,
    bool|IResolvable ActionsEnabled = null,
    string[] AlarmActions = null,
    string AlarmDescription = null,
    string AlarmName = null,
    string[] InsufficientDataActions = null,
    string[] OkActions = null,
    IResolvable|CloudwatchLogAlarmTags[] Tags = null,
    string TreatMissingData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The arithmetic operation to use when comparing the specified threshold and the query results. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm">QueryResultsToAlarm</a></code> | <code>double</code> | The number of query results that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate">QueryResultsToEvaluate</a></code> | <code>double</code> | The number of query results over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration">ScheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | The scheduled query configuration for the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold">Threshold</a></code> | <code>double</code> | The value to compare against the results of the scheduled query evaluation. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount">ActionLogLineCount</a></code> | <code>double</code> | The number of log lines to include in alarm notifications. Valid values are 0 to 50. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn">ActionLogLineRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled">ActionsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions">AlarmActions</a></code> | <code>string[]</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription">AlarmDescription</a></code> | <code>string</code> | The description of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName">AlarmName</a></code> | <code>string</code> | The name of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>string[]</code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions">OkActions</a></code> | <code>string[]</code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]</code> | A list of key-value pairs to associate with the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The arithmetic operation to use when comparing the specified threshold and the query results.

Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#comparison_operator CloudwatchLogAlarm#comparison_operator}

---

##### `QueryResultsToAlarm`<sup>Required</sup> <a name="QueryResultsToAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm"></a>

```csharp
public double QueryResultsToAlarm { get; set; }
```

- *Type:* double

The number of query results that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#query_results_to_alarm CloudwatchLogAlarm#query_results_to_alarm}

---

##### `QueryResultsToEvaluate`<sup>Required</sup> <a name="QueryResultsToEvaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate"></a>

```csharp
public double QueryResultsToEvaluate { get; set; }
```

- *Type:* double

The number of query results over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#query_results_to_evaluate CloudwatchLogAlarm#query_results_to_evaluate}

---

##### `ScheduledQueryConfiguration`<sup>Required</sup> <a name="ScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration"></a>

```csharp
public CloudwatchLogAlarmScheduledQueryConfiguration ScheduledQueryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

The scheduled query configuration for the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#scheduled_query_configuration CloudwatchLogAlarm#scheduled_query_configuration}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The value to compare against the results of the scheduled query evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#threshold CloudwatchLogAlarm#threshold}

---

##### `ActionLogLineCount`<sup>Optional</sup> <a name="ActionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount"></a>

```csharp
public double ActionLogLineCount { get; set; }
```

- *Type:* double

The number of log lines to include in alarm notifications. Valid values are 0 to 50.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#action_log_line_count CloudwatchLogAlarm#action_log_line_count}

---

##### `ActionLogLineRoleArn`<sup>Optional</sup> <a name="ActionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn"></a>

```csharp
public string ActionLogLineRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications.

Required when ActionLogLineCount is greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#action_log_line_role_arn CloudwatchLogAlarm#action_log_line_role_arn}

---

##### `ActionsEnabled`<sup>Optional</sup> <a name="ActionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled"></a>

```csharp
public bool|IResolvable ActionsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#actions_enabled CloudwatchLogAlarm#actions_enabled}

---

##### `AlarmActions`<sup>Optional</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions"></a>

```csharp
public string[] AlarmActions { get; set; }
```

- *Type:* string[]

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#alarm_actions CloudwatchLogAlarm#alarm_actions}

---

##### `AlarmDescription`<sup>Optional</sup> <a name="AlarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription"></a>

```csharp
public string AlarmDescription { get; set; }
```

- *Type:* string

The description of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#alarm_description CloudwatchLogAlarm#alarm_description}

---

##### `AlarmName`<sup>Optional</sup> <a name="AlarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName"></a>

```csharp
public string AlarmName { get; set; }
```

- *Type:* string

The name of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#alarm_name CloudwatchLogAlarm#alarm_name}

---

##### `InsufficientDataActions`<sup>Optional</sup> <a name="InsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions"></a>

```csharp
public string[] InsufficientDataActions { get; set; }
```

- *Type:* string[]

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#insufficient_data_actions CloudwatchLogAlarm#insufficient_data_actions}

---

##### `OkActions`<sup>Optional</sup> <a name="OkActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions"></a>

```csharp
public string[] OkActions { get; set; }
```

- *Type:* string[]

The actions to execute when this alarm transitions to the OK state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#ok_actions CloudwatchLogAlarm#ok_actions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags"></a>

```csharp
public IResolvable|CloudwatchLogAlarmTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]

A list of key-value pairs to associate with the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

##### `TreatMissingData`<sup>Optional</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; set; }
```

- *Type:* string

Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#treat_missing_data CloudwatchLogAlarm#treat_missing_data}

---

### CloudwatchLogAlarmScheduledQueryConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmScheduledQueryConfiguration {
    string AggregationExpression,
    string QueryString,
    CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration ScheduleConfiguration,
    string ScheduledQueryRoleArn,
    string[] LogGroupIdentifiers = null,
    IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression">AggregationExpression</a></code> | <code>string</code> | The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString">QueryString</a></code> | <code>string</code> | The query string to execute against the specified log groups. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration">ScheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | The schedule configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn">ScheduledQueryRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that grants permissions to execute the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers">LogGroupIdentifiers</a></code> | <code>string[]</code> | The log groups to query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]</code> | A list of key-value pairs to associate with the scheduled query that backs the log alarm. |

---

##### `AggregationExpression`<sup>Required</sup> <a name="AggregationExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression"></a>

```csharp
public string AggregationExpression { get; set; }
```

- *Type:* string

The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#aggregation_expression CloudwatchLogAlarm#aggregation_expression}

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString"></a>

```csharp
public string QueryString { get; set; }
```

- *Type:* string

The query string to execute against the specified log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#query_string CloudwatchLogAlarm#query_string}

---

##### `ScheduleConfiguration`<sup>Required</sup> <a name="ScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration"></a>

```csharp
public CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration ScheduleConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

The schedule configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#schedule_configuration CloudwatchLogAlarm#schedule_configuration}

---

##### `ScheduledQueryRoleArn`<sup>Required</sup> <a name="ScheduledQueryRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn"></a>

```csharp
public string ScheduledQueryRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that grants permissions to execute the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#scheduled_query_role_arn CloudwatchLogAlarm#scheduled_query_role_arn}

---

##### `LogGroupIdentifiers`<sup>Optional</sup> <a name="LogGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers"></a>

```csharp
public string[] LogGroupIdentifiers { get; set; }
```

- *Type:* string[]

The log groups to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#log_group_identifiers CloudwatchLogAlarm#log_group_identifiers}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags"></a>

```csharp
public IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]

A list of key-value pairs to associate with the scheduled query that backs the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration {
    string ScheduleExpression,
    double StartTimeOffset,
    double EndTimeOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | The expression that defines when the scheduled query runs, e.g. rate(1 minute). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset">StartTimeOffset</a></code> | <code>double</code> | The number of seconds into the past to start the query window. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset">EndTimeOffset</a></code> | <code>double</code> | The number of seconds into the past to end the query window. |

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

The expression that defines when the scheduled query runs, e.g. rate(1 minute).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#schedule_expression CloudwatchLogAlarm#schedule_expression}

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset"></a>

```csharp
public double StartTimeOffset { get; set; }
```

- *Type:* double

The number of seconds into the past to start the query window.

Must be a positive value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#start_time_offset CloudwatchLogAlarm#start_time_offset}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset"></a>

```csharp
public double EndTimeOffset { get; set; }
```

- *Type:* double

The number of seconds into the past to end the query window.

Must be a non-negative value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#end_time_offset CloudwatchLogAlarm#end_time_offset}

---

### CloudwatchLogAlarmScheduledQueryConfigurationTags <a name="CloudwatchLogAlarmScheduledQueryConfigurationTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmScheduledQueryConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key">Key</a></code> | <code>string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value">Value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

### CloudwatchLogAlarmTags <a name="CloudwatchLogAlarmTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key">Key</a></code> | <code>string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value">Value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogAlarmScheduledQueryConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmScheduledQueryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration">PutScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers">ResetLogGroupIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduleConfiguration` <a name="PutScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration"></a>

```csharp
private void PutScheduleConfiguration(CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]

---

##### `ResetLogGroupIdentifiers` <a name="ResetLogGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers"></a>

```csharp
private void ResetLogGroupIdentifiers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration">ScheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput">AggregationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput">LogGroupIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput">ScheduleConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput">ScheduledQueryRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression">AggregationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers">LogGroupIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString">QueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn">ScheduledQueryRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduleConfiguration`<sup>Required</sup> <a name="ScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration"></a>

```csharp
public CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference ScheduleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags"></a>

```csharp
public CloudwatchLogAlarmScheduledQueryConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a>

---

##### `AggregationExpressionInput`<sup>Optional</sup> <a name="AggregationExpressionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput"></a>

```csharp
public string AggregationExpressionInput { get; }
```

- *Type:* string

---

##### `LogGroupIdentifiersInput`<sup>Optional</sup> <a name="LogGroupIdentifiersInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput"></a>

```csharp
public string[] LogGroupIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput"></a>

```csharp
public string QueryStringInput { get; }
```

- *Type:* string

---

##### `ScheduleConfigurationInput`<sup>Optional</sup> <a name="ScheduleConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput"></a>

```csharp
public IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration ScheduleConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---

##### `ScheduledQueryRoleArnInput`<sup>Optional</sup> <a name="ScheduledQueryRoleArnInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput"></a>

```csharp
public string ScheduledQueryRoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]

---

##### `AggregationExpression`<sup>Required</sup> <a name="AggregationExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression"></a>

```csharp
public string AggregationExpression { get; }
```

- *Type:* string

---

##### `LogGroupIdentifiers`<sup>Required</sup> <a name="LogGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers"></a>

```csharp
public string[] LogGroupIdentifiers { get; }
```

- *Type:* string[]

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString"></a>

```csharp
public string QueryString { get; }
```

- *Type:* string

---

##### `ScheduledQueryRoleArn`<sup>Required</sup> <a name="ScheduledQueryRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn"></a>

```csharp
public string ScheduledQueryRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogAlarmScheduledQueryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---


### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset"></a>

```csharp
private void ResetEndTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput"></a>

```csharp
public double EndTimeOffsetInput { get; }
```

- *Type:* double

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput"></a>

```csharp
public double StartTimeOffsetInput { get; }
```

- *Type:* double

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset"></a>

```csharp
public double EndTimeOffset { get; }
```

- *Type:* double

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset"></a>

```csharp
public double StartTimeOffset { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsList <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmScheduledQueryConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get"></a>

```csharp
private CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>

---


### CloudwatchLogAlarmTagsList <a name="CloudwatchLogAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get"></a>

```csharp
private CloudwatchLogAlarmTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogAlarmTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]

---


### CloudwatchLogAlarmTagsOutputReference <a name="CloudwatchLogAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudwatchLogAlarmTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchLogAlarmTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>

---



