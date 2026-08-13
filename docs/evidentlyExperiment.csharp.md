# `evidentlyExperiment` Submodule <a name="`evidentlyExperiment` Submodule" id="@cdktn/provider-awscc.evidentlyExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyExperiment <a name="EvidentlyExperiment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment awscc_evidently_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperiment(Construct Scope, string Id, EvidentlyExperimentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig">EvidentlyExperimentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig">EvidentlyExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals">PutMetricGoals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig">PutOnlineAbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus">PutRunningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments">PutTreatments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRandomizationSalt">ResetRandomizationSalt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRemoveSegment">ResetRemoveSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRunningStatus">ResetRunningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSegment">ResetSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetricGoals` <a name="PutMetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals"></a>

```csharp
private void PutMetricGoals(IResolvable|EvidentlyExperimentMetricGoals[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]

---

##### `PutOnlineAbConfig` <a name="PutOnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig"></a>

```csharp
private void PutOnlineAbConfig(EvidentlyExperimentOnlineAbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

---

##### `PutRunningStatus` <a name="PutRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus"></a>

```csharp
private void PutRunningStatus(EvidentlyExperimentRunningStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags"></a>

```csharp
private void PutTags(IResolvable|EvidentlyExperimentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]

---

##### `PutTreatments` <a name="PutTreatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments"></a>

```csharp
private void PutTreatments(IResolvable|EvidentlyExperimentTreatments[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRandomizationSalt` <a name="ResetRandomizationSalt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRandomizationSalt"></a>

```csharp
private void ResetRandomizationSalt()
```

##### `ResetRemoveSegment` <a name="ResetRemoveSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRemoveSegment"></a>

```csharp
private void ResetRemoveSegment()
```

##### `ResetRunningStatus` <a name="ResetRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRunningStatus"></a>

```csharp
private void ResetRunningStatus()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSamplingRate"></a>

```csharp
private void ResetSamplingRate()
```

##### `ResetSegment` <a name="ResetSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSegment"></a>

```csharp
private void ResetSegment()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EvidentlyExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvidentlyExperiment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvidentlyExperiment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvidentlyExperiment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvidentlyExperiment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EvidentlyExperiment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EvidentlyExperiment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EvidentlyExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoals">MetricGoals</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList">EvidentlyExperimentMetricGoalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfig">OnlineAbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference">EvidentlyExperimentOnlineAbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatus">RunningStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference">EvidentlyExperimentRunningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList">EvidentlyExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatments">Treatments</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList">EvidentlyExperimentTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoalsInput">MetricGoalsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfigInput">OnlineAbConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSaltInput">RandomizationSaltInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegmentInput">RemoveSegmentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatusInput">RunningStatusInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRateInput">SamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segmentInput">SegmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatmentsInput">TreatmentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSalt">RandomizationSalt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegment">RemoveSegment</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRate">SamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segment">Segment</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricGoals`<sup>Required</sup> <a name="MetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoals"></a>

```csharp
public EvidentlyExperimentMetricGoalsList MetricGoals { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList">EvidentlyExperimentMetricGoalsList</a>

---

##### `OnlineAbConfig`<sup>Required</sup> <a name="OnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfig"></a>

```csharp
public EvidentlyExperimentOnlineAbConfigOutputReference OnlineAbConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference">EvidentlyExperimentOnlineAbConfigOutputReference</a>

---

##### `RunningStatus`<sup>Required</sup> <a name="RunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatus"></a>

```csharp
public EvidentlyExperimentRunningStatusOutputReference RunningStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference">EvidentlyExperimentRunningStatusOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tags"></a>

```csharp
public EvidentlyExperimentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList">EvidentlyExperimentTagsList</a>

---

##### `Treatments`<sup>Required</sup> <a name="Treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatments"></a>

```csharp
public EvidentlyExperimentTreatmentsList Treatments { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList">EvidentlyExperimentTreatmentsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MetricGoalsInput`<sup>Optional</sup> <a name="MetricGoalsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoalsInput"></a>

```csharp
public IResolvable|EvidentlyExperimentMetricGoals[] MetricGoalsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnlineAbConfigInput`<sup>Optional</sup> <a name="OnlineAbConfigInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfigInput"></a>

```csharp
public IResolvable|EvidentlyExperimentOnlineAbConfig OnlineAbConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RandomizationSaltInput`<sup>Optional</sup> <a name="RandomizationSaltInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSaltInput"></a>

```csharp
public string RandomizationSaltInput { get; }
```

- *Type:* string

---

##### `RemoveSegmentInput`<sup>Optional</sup> <a name="RemoveSegmentInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegmentInput"></a>

```csharp
public bool|IResolvable RemoveSegmentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RunningStatusInput`<sup>Optional</sup> <a name="RunningStatusInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatusInput"></a>

```csharp
public IResolvable|EvidentlyExperimentRunningStatus RunningStatusInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRateInput"></a>

```csharp
public double SamplingRateInput { get; }
```

- *Type:* double

---

##### `SegmentInput`<sup>Optional</sup> <a name="SegmentInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segmentInput"></a>

```csharp
public string SegmentInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tagsInput"></a>

```csharp
public IResolvable|EvidentlyExperimentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]

---

##### `TreatmentsInput`<sup>Optional</sup> <a name="TreatmentsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatmentsInput"></a>

```csharp
public IResolvable|EvidentlyExperimentTreatments[] TreatmentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RandomizationSalt`<sup>Required</sup> <a name="RandomizationSalt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSalt"></a>

```csharp
public string RandomizationSalt { get; }
```

- *Type:* string

---

##### `RemoveSegment`<sup>Required</sup> <a name="RemoveSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegment"></a>

```csharp
public bool|IResolvable RemoveSegment { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRate"></a>

```csharp
public double SamplingRate { get; }
```

- *Type:* double

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segment"></a>

```csharp
public string Segment { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyExperimentConfig <a name="EvidentlyExperimentConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|EvidentlyExperimentMetricGoals[] MetricGoals,
    string Name,
    EvidentlyExperimentOnlineAbConfig OnlineAbConfig,
    string Project,
    IResolvable|EvidentlyExperimentTreatments[] Treatments,
    string Description = null,
    string RandomizationSalt = null,
    bool|IResolvable RemoveSegment = null,
    EvidentlyExperimentRunningStatus RunningStatus = null,
    double SamplingRate = null,
    string Segment = null,
    IResolvable|EvidentlyExperimentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.metricGoals">MetricGoals</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.onlineAbConfig">OnlineAbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.treatments">Treatments</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.randomizationSalt">RandomizationSalt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.removeSegment">RemoveSegment</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.runningStatus">RunningStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | Start Experiment. Default is False. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.samplingRate">SamplingRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.segment">Segment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MetricGoals`<sup>Required</sup> <a name="MetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.metricGoals"></a>

```csharp
public IResolvable|EvidentlyExperimentMetricGoals[] MetricGoals { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}.

---

##### `OnlineAbConfig`<sup>Required</sup> <a name="OnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.onlineAbConfig"></a>

```csharp
public EvidentlyExperimentOnlineAbConfig OnlineAbConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}.

---

##### `Treatments`<sup>Required</sup> <a name="Treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.treatments"></a>

```csharp
public IResolvable|EvidentlyExperimentTreatments[] Treatments { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}.

---

##### `RandomizationSalt`<sup>Optional</sup> <a name="RandomizationSalt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.randomizationSalt"></a>

```csharp
public string RandomizationSalt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}.

---

##### `RemoveSegment`<sup>Optional</sup> <a name="RemoveSegment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.removeSegment"></a>

```csharp
public bool|IResolvable RemoveSegment { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}.

---

##### `RunningStatus`<sup>Optional</sup> <a name="RunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.runningStatus"></a>

```csharp
public EvidentlyExperimentRunningStatus RunningStatus { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

Start Experiment. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#running_status EvidentlyExperiment#running_status}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.samplingRate"></a>

```csharp
public double SamplingRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}.

---

##### `Segment`<sup>Optional</sup> <a name="Segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.segment"></a>

```csharp
public string Segment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.tags"></a>

```csharp
public IResolvable|EvidentlyExperimentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#tags EvidentlyExperiment#tags}

---

### EvidentlyExperimentMetricGoals <a name="EvidentlyExperimentMetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentMetricGoals {
    string DesiredChange,
    string EntityIdKey,
    string MetricName,
    string ValueKey,
    string EventPattern = null,
    string UnitLabel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.desiredChange">DesiredChange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#desired_change EvidentlyExperiment#desired_change}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.entityIdKey">EntityIdKey</a></code> | <code>string</code> | The JSON path to reference the entity id in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_name EvidentlyExperiment#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.valueKey">ValueKey</a></code> | <code>string</code> | The JSON path to reference the numerical metric value in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.eventPattern">EventPattern</a></code> | <code>string</code> | Event patterns have the same structure as the events they match. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.unitLabel">UnitLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#unit_label EvidentlyExperiment#unit_label}. |

---

##### `DesiredChange`<sup>Required</sup> <a name="DesiredChange" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.desiredChange"></a>

```csharp
public string DesiredChange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#desired_change EvidentlyExperiment#desired_change}.

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.entityIdKey"></a>

```csharp
public string EntityIdKey { get; set; }
```

- *Type:* string

The JSON path to reference the entity id in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#entity_id_key EvidentlyExperiment#entity_id_key}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#metric_name EvidentlyExperiment#metric_name}.

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.valueKey"></a>

```csharp
public string ValueKey { get; set; }
```

- *Type:* string

The JSON path to reference the numerical metric value in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#value_key EvidentlyExperiment#value_key}

---

##### `EventPattern`<sup>Optional</sup> <a name="EventPattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.eventPattern"></a>

```csharp
public string EventPattern { get; set; }
```

- *Type:* string

Event patterns have the same structure as the events they match.

Rules use event patterns to select events. An event pattern either matches an event or it doesn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#event_pattern EvidentlyExperiment#event_pattern}

---

##### `UnitLabel`<sup>Optional</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.unitLabel"></a>

```csharp
public string UnitLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#unit_label EvidentlyExperiment#unit_label}.

---

### EvidentlyExperimentOnlineAbConfig <a name="EvidentlyExperimentOnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentOnlineAbConfig {
    string ControlTreatmentName = null,
    IResolvable|EvidentlyExperimentOnlineAbConfigTreatmentWeights[] TreatmentWeights = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.controlTreatmentName">ControlTreatmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#control_treatment_name EvidentlyExperiment#control_treatment_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.treatmentWeights">TreatmentWeights</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_weights EvidentlyExperiment#treatment_weights}. |

---

##### `ControlTreatmentName`<sup>Optional</sup> <a name="ControlTreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.controlTreatmentName"></a>

```csharp
public string ControlTreatmentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#control_treatment_name EvidentlyExperiment#control_treatment_name}.

---

##### `TreatmentWeights`<sup>Optional</sup> <a name="TreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.treatmentWeights"></a>

```csharp
public IResolvable|EvidentlyExperimentOnlineAbConfigTreatmentWeights[] TreatmentWeights { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_weights EvidentlyExperiment#treatment_weights}.

---

### EvidentlyExperimentOnlineAbConfigTreatmentWeights <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentOnlineAbConfigTreatmentWeights {
    double SplitWeight = null,
    string Treatment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.splitWeight">SplitWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#split_weight EvidentlyExperiment#split_weight}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.treatment">Treatment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment EvidentlyExperiment#treatment}. |

---

##### `SplitWeight`<sup>Optional</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.splitWeight"></a>

```csharp
public double SplitWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#split_weight EvidentlyExperiment#split_weight}.

---

##### `Treatment`<sup>Optional</sup> <a name="Treatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.treatment"></a>

```csharp
public string Treatment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment EvidentlyExperiment#treatment}.

---

### EvidentlyExperimentRunningStatus <a name="EvidentlyExperimentRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentRunningStatus {
    string AnalysisCompleteTime = null,
    string DesiredState = null,
    string Reason = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.analysisCompleteTime">AnalysisCompleteTime</a></code> | <code>string</code> | Provide the analysis Completion time for an experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.desiredState">DesiredState</a></code> | <code>string</code> | Provide CANCELLED or COMPLETED desired state when stopping an experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.reason">Reason</a></code> | <code>string</code> | Reason is a required input for stopping the experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.status">Status</a></code> | <code>string</code> | Provide START or STOP action to apply on an experiment. |

---

##### `AnalysisCompleteTime`<sup>Optional</sup> <a name="AnalysisCompleteTime" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.analysisCompleteTime"></a>

```csharp
public string AnalysisCompleteTime { get; set; }
```

- *Type:* string

Provide the analysis Completion time for an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#analysis_complete_time EvidentlyExperiment#analysis_complete_time}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.desiredState"></a>

```csharp
public string DesiredState { get; set; }
```

- *Type:* string

Provide CANCELLED or COMPLETED desired state when stopping an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#desired_state EvidentlyExperiment#desired_state}

---

##### `Reason`<sup>Optional</sup> <a name="Reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.reason"></a>

```csharp
public string Reason { get; set; }
```

- *Type:* string

Reason is a required input for stopping the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#reason EvidentlyExperiment#reason}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Provide START or STOP action to apply on an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#status EvidentlyExperiment#status}

---

### EvidentlyExperimentTags <a name="EvidentlyExperimentTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#key EvidentlyExperiment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#value EvidentlyExperiment#value}

---

### EvidentlyExperimentTreatments <a name="EvidentlyExperimentTreatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentTreatments {
    string Feature,
    string TreatmentName,
    string Variation,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.feature">Feature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#feature EvidentlyExperiment#feature}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.treatmentName">TreatmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_name EvidentlyExperiment#treatment_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.variation">Variation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#variation EvidentlyExperiment#variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}. |

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.feature"></a>

```csharp
public string Feature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#feature EvidentlyExperiment#feature}.

---

##### `TreatmentName`<sup>Required</sup> <a name="TreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.treatmentName"></a>

```csharp
public string TreatmentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#treatment_name EvidentlyExperiment#treatment_name}.

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.variation"></a>

```csharp
public string Variation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#variation EvidentlyExperiment#variation}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyExperimentMetricGoalsList <a name="EvidentlyExperimentMetricGoalsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentMetricGoalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get"></a>

```csharp
private EvidentlyExperimentMetricGoalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentMetricGoals[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>[]

---


### EvidentlyExperimentMetricGoalsOutputReference <a name="EvidentlyExperimentMetricGoalsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentMetricGoalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetEventPattern">ResetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetUnitLabel">ResetUnitLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventPattern` <a name="ResetEventPattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetEventPattern"></a>

```csharp
private void ResetEventPattern()
```

##### `ResetUnitLabel` <a name="ResetUnitLabel" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetUnitLabel"></a>

```csharp
private void ResetUnitLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChangeInput">DesiredChangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKeyInput">EntityIdKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPatternInput">EventPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabelInput">UnitLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKeyInput">ValueKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChange">DesiredChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey">EntityIdKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPattern">EventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabel">UnitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKey">ValueKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DesiredChangeInput`<sup>Optional</sup> <a name="DesiredChangeInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChangeInput"></a>

```csharp
public string DesiredChangeInput { get; }
```

- *Type:* string

---

##### `EntityIdKeyInput`<sup>Optional</sup> <a name="EntityIdKeyInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKeyInput"></a>

```csharp
public string EntityIdKeyInput { get; }
```

- *Type:* string

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPatternInput"></a>

```csharp
public string EventPatternInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `UnitLabelInput`<sup>Optional</sup> <a name="UnitLabelInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabelInput"></a>

```csharp
public string UnitLabelInput { get; }
```

- *Type:* string

---

##### `ValueKeyInput`<sup>Optional</sup> <a name="ValueKeyInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKeyInput"></a>

```csharp
public string ValueKeyInput { get; }
```

- *Type:* string

---

##### `DesiredChange`<sup>Required</sup> <a name="DesiredChange" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChange"></a>

```csharp
public string DesiredChange { get; }
```

- *Type:* string

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey"></a>

```csharp
public string EntityIdKey { get; }
```

- *Type:* string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPattern"></a>

```csharp
public string EventPattern { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `UnitLabel`<sup>Required</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabel"></a>

```csharp
public string UnitLabel { get; }
```

- *Type:* string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKey"></a>

```csharp
public string ValueKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentMetricGoals InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>

---


### EvidentlyExperimentOnlineAbConfigOutputReference <a name="EvidentlyExperimentOnlineAbConfigOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentOnlineAbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights">PutTreatmentWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetControlTreatmentName">ResetControlTreatmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetTreatmentWeights">ResetTreatmentWeights</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTreatmentWeights` <a name="PutTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights"></a>

```csharp
private void PutTreatmentWeights(IResolvable|EvidentlyExperimentOnlineAbConfigTreatmentWeights[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]

---

##### `ResetControlTreatmentName` <a name="ResetControlTreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetControlTreatmentName"></a>

```csharp
private void ResetControlTreatmentName()
```

##### `ResetTreatmentWeights` <a name="ResetTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetTreatmentWeights"></a>

```csharp
private void ResetTreatmentWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights">TreatmentWeights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList">EvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentNameInput">ControlTreatmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeightsInput">TreatmentWeightsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName">ControlTreatmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TreatmentWeights`<sup>Required</sup> <a name="TreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights"></a>

```csharp
public EvidentlyExperimentOnlineAbConfigTreatmentWeightsList TreatmentWeights { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList">EvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a>

---

##### `ControlTreatmentNameInput`<sup>Optional</sup> <a name="ControlTreatmentNameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentNameInput"></a>

```csharp
public string ControlTreatmentNameInput { get; }
```

- *Type:* string

---

##### `TreatmentWeightsInput`<sup>Optional</sup> <a name="TreatmentWeightsInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeightsInput"></a>

```csharp
public IResolvable|EvidentlyExperimentOnlineAbConfigTreatmentWeights[] TreatmentWeightsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]

---

##### `ControlTreatmentName`<sup>Required</sup> <a name="ControlTreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName"></a>

```csharp
public string ControlTreatmentName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentOnlineAbConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

---


### EvidentlyExperimentOnlineAbConfigTreatmentWeightsList <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeightsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentOnlineAbConfigTreatmentWeightsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get"></a>

```csharp
private EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentOnlineAbConfigTreatmentWeights[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>[]

---


### EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetSplitWeight">ResetSplitWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetTreatment">ResetTreatment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSplitWeight` <a name="ResetSplitWeight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetSplitWeight"></a>

```csharp
private void ResetSplitWeight()
```

##### `ResetTreatment` <a name="ResetTreatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetTreatment"></a>

```csharp
private void ResetTreatment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeightInput">SplitWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatmentInput">TreatmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight">SplitWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment">Treatment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SplitWeightInput`<sup>Optional</sup> <a name="SplitWeightInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeightInput"></a>

```csharp
public double SplitWeightInput { get; }
```

- *Type:* double

---

##### `TreatmentInput`<sup>Optional</sup> <a name="TreatmentInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatmentInput"></a>

```csharp
public string TreatmentInput { get; }
```

- *Type:* string

---

##### `SplitWeight`<sup>Required</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight"></a>

```csharp
public double SplitWeight { get; }
```

- *Type:* double

---

##### `Treatment`<sup>Required</sup> <a name="Treatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment"></a>

```csharp
public string Treatment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentOnlineAbConfigTreatmentWeights InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>

---


### EvidentlyExperimentRunningStatusOutputReference <a name="EvidentlyExperimentRunningStatusOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentRunningStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetAnalysisCompleteTime">ResetAnalysisCompleteTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetReason">ResetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalysisCompleteTime` <a name="ResetAnalysisCompleteTime" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetAnalysisCompleteTime"></a>

```csharp
private void ResetAnalysisCompleteTime()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetDesiredState"></a>

```csharp
private void ResetDesiredState()
```

##### `ResetReason` <a name="ResetReason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetReason"></a>

```csharp
private void ResetReason()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTimeInput">AnalysisCompleteTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredStateInput">DesiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reasonInput">ReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime">AnalysisCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredState">DesiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnalysisCompleteTimeInput`<sup>Optional</sup> <a name="AnalysisCompleteTimeInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTimeInput"></a>

```csharp
public string AnalysisCompleteTimeInput { get; }
```

- *Type:* string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredStateInput"></a>

```csharp
public string DesiredStateInput { get; }
```

- *Type:* string

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reasonInput"></a>

```csharp
public string ReasonInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `AnalysisCompleteTime`<sup>Required</sup> <a name="AnalysisCompleteTime" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime"></a>

```csharp
public string AnalysisCompleteTime { get; }
```

- *Type:* string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredState"></a>

```csharp
public string DesiredState { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentRunningStatus InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

---


### EvidentlyExperimentTagsList <a name="EvidentlyExperimentTagsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get"></a>

```csharp
private EvidentlyExperimentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>[]

---


### EvidentlyExperimentTagsOutputReference <a name="EvidentlyExperimentTagsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>

---


### EvidentlyExperimentTreatmentsList <a name="EvidentlyExperimentTreatmentsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentTreatmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get"></a>

```csharp
private EvidentlyExperimentTreatmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentTreatments[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>[]

---


### EvidentlyExperimentTreatmentsOutputReference <a name="EvidentlyExperimentTreatmentsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvidentlyExperimentTreatmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.featureInput">FeatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentNameInput">TreatmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variationInput">VariationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.feature">Feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentName">TreatmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variation">Variation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.featureInput"></a>

```csharp
public string FeatureInput { get; }
```

- *Type:* string

---

##### `TreatmentNameInput`<sup>Optional</sup> <a name="TreatmentNameInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentNameInput"></a>

```csharp
public string TreatmentNameInput { get; }
```

- *Type:* string

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variationInput"></a>

```csharp
public string VariationInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.feature"></a>

```csharp
public string Feature { get; }
```

- *Type:* string

---

##### `TreatmentName`<sup>Required</sup> <a name="TreatmentName" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentName"></a>

```csharp
public string TreatmentName { get; }
```

- *Type:* string

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variation"></a>

```csharp
public string Variation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvidentlyExperimentTreatments InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>

---



