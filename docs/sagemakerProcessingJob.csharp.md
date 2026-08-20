# `sagemakerProcessingJob` Submodule <a name="`sagemakerProcessingJob` Submodule" id="@cdktn/provider-awscc.sagemakerProcessingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerProcessingJob <a name="SagemakerProcessingJob" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job awscc_sagemaker_processing_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJob(Construct Scope, string Id, SagemakerProcessingJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig">SagemakerProcessingJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig">SagemakerProcessingJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification">PutAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig">PutExperimentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingInputs">PutProcessingInputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig">PutProcessingOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingResources">PutProcessingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putStoppingCondition">PutStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetExperimentConfig">ResetExperimentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingInputs">ResetProcessingInputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingJobName">ResetProcessingJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingOutputConfig">ResetProcessingOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetStoppingCondition">ResetStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppSpecification` <a name="PutAppSpecification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification"></a>

```csharp
private void PutAppSpecification(SagemakerProcessingJobAppSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

---

##### `PutExperimentConfig` <a name="PutExperimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig"></a>

```csharp
private void PutExperimentConfig(SagemakerProcessingJobExperimentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(SagemakerProcessingJobNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

---

##### `PutProcessingInputs` <a name="PutProcessingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingInputs"></a>

```csharp
private void PutProcessingInputs(IResolvable|SagemakerProcessingJobProcessingInputs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingInputs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]

---

##### `PutProcessingOutputConfig` <a name="PutProcessingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig"></a>

```csharp
private void PutProcessingOutputConfig(SagemakerProcessingJobProcessingOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

---

##### `PutProcessingResources` <a name="PutProcessingResources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingResources"></a>

```csharp
private void PutProcessingResources(SagemakerProcessingJobProcessingResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

---

##### `PutStoppingCondition` <a name="PutStoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putStoppingCondition"></a>

```csharp
private void PutStoppingCondition(SagemakerProcessingJobStoppingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerProcessingJobTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]

---

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetExperimentConfig` <a name="ResetExperimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetExperimentConfig"></a>

```csharp
private void ResetExperimentConfig()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetProcessingInputs` <a name="ResetProcessingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingInputs"></a>

```csharp
private void ResetProcessingInputs()
```

##### `ResetProcessingJobName` <a name="ResetProcessingJobName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingJobName"></a>

```csharp
private void ResetProcessingJobName()
```

##### `ResetProcessingOutputConfig` <a name="ResetProcessingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingOutputConfig"></a>

```csharp
private void ResetProcessingOutputConfig()
```

##### `ResetStoppingCondition` <a name="ResetStoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetStoppingCondition"></a>

```csharp
private void ResetStoppingCondition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerProcessingJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerProcessingJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerProcessingJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerProcessingJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerProcessingJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerProcessingJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerProcessingJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerProcessingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerProcessingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecification">AppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference">SagemakerProcessingJobAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.autoMlJobArn">AutoMlJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.exitMessage">ExitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfig">ExperimentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference">SagemakerProcessingJobExperimentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.monitoringScheduleArn">MonitoringScheduleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference">SagemakerProcessingJobNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingEndTime">ProcessingEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputs">ProcessingInputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList">SagemakerProcessingJobProcessingInputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobArn">ProcessingJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobStatus">ProcessingJobStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfig">ProcessingOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResources">ProcessingResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference">SagemakerProcessingJobProcessingResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingStartTime">ProcessingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference">SagemakerProcessingJobStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList">SagemakerProcessingJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.trainingJobArn">TrainingJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecificationInput">AppSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environmentInput">EnvironmentInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfigInput">ExperimentConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfigInput">NetworkConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputsInput">ProcessingInputsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobNameInput">ProcessingJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfigInput">ProcessingOutputConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResourcesInput">ProcessingResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingConditionInput">StoppingConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobName">ProcessingJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppSpecification`<sup>Required</sup> <a name="AppSpecification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecification"></a>

```csharp
public SagemakerProcessingJobAppSpecificationOutputReference AppSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference">SagemakerProcessingJobAppSpecificationOutputReference</a>

---

##### `AutoMlJobArn`<sup>Required</sup> <a name="AutoMlJobArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.autoMlJobArn"></a>

```csharp
public string AutoMlJobArn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `ExitMessage`<sup>Required</sup> <a name="ExitMessage" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.exitMessage"></a>

```csharp
public string ExitMessage { get; }
```

- *Type:* string

---

##### `ExperimentConfig`<sup>Required</sup> <a name="ExperimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfig"></a>

```csharp
public SagemakerProcessingJobExperimentConfigOutputReference ExperimentConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference">SagemakerProcessingJobExperimentConfigOutputReference</a>

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `MonitoringScheduleArn`<sup>Required</sup> <a name="MonitoringScheduleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.monitoringScheduleArn"></a>

```csharp
public string MonitoringScheduleArn { get; }
```

- *Type:* string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfig"></a>

```csharp
public SagemakerProcessingJobNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference">SagemakerProcessingJobNetworkConfigOutputReference</a>

---

##### `ProcessingEndTime`<sup>Required</sup> <a name="ProcessingEndTime" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingEndTime"></a>

```csharp
public string ProcessingEndTime { get; }
```

- *Type:* string

---

##### `ProcessingInputs`<sup>Required</sup> <a name="ProcessingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputs"></a>

```csharp
public SagemakerProcessingJobProcessingInputsList ProcessingInputs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList">SagemakerProcessingJobProcessingInputsList</a>

---

##### `ProcessingJobArn`<sup>Required</sup> <a name="ProcessingJobArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobArn"></a>

```csharp
public string ProcessingJobArn { get; }
```

- *Type:* string

---

##### `ProcessingJobStatus`<sup>Required</sup> <a name="ProcessingJobStatus" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobStatus"></a>

```csharp
public string ProcessingJobStatus { get; }
```

- *Type:* string

---

##### `ProcessingOutputConfig`<sup>Required</sup> <a name="ProcessingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfig"></a>

```csharp
public SagemakerProcessingJobProcessingOutputConfigOutputReference ProcessingOutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputReference</a>

---

##### `ProcessingResources`<sup>Required</sup> <a name="ProcessingResources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResources"></a>

```csharp
public SagemakerProcessingJobProcessingResourcesOutputReference ProcessingResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference">SagemakerProcessingJobProcessingResourcesOutputReference</a>

---

##### `ProcessingStartTime`<sup>Required</sup> <a name="ProcessingStartTime" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingStartTime"></a>

```csharp
public string ProcessingStartTime { get; }
```

- *Type:* string

---

##### `StoppingCondition`<sup>Required</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingCondition"></a>

```csharp
public SagemakerProcessingJobStoppingConditionOutputReference StoppingCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference">SagemakerProcessingJobStoppingConditionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tags"></a>

```csharp
public SagemakerProcessingJobTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList">SagemakerProcessingJobTagsList</a>

---

##### `TrainingJobArn`<sup>Required</sup> <a name="TrainingJobArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.trainingJobArn"></a>

```csharp
public string TrainingJobArn { get; }
```

- *Type:* string

---

##### `AppSpecificationInput`<sup>Optional</sup> <a name="AppSpecificationInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecificationInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobAppSpecification AppSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environmentInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExperimentConfigInput`<sup>Optional</sup> <a name="ExperimentConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfigInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobExperimentConfig ExperimentConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfigInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobNetworkConfig NetworkConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

---

##### `ProcessingInputsInput`<sup>Optional</sup> <a name="ProcessingInputsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputsInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputs[] ProcessingInputsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]

---

##### `ProcessingJobNameInput`<sup>Optional</sup> <a name="ProcessingJobNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobNameInput"></a>

```csharp
public string ProcessingJobNameInput { get; }
```

- *Type:* string

---

##### `ProcessingOutputConfigInput`<sup>Optional</sup> <a name="ProcessingOutputConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfigInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfig ProcessingOutputConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

---

##### `ProcessingResourcesInput`<sup>Optional</sup> <a name="ProcessingResourcesInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResourcesInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingResources ProcessingResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StoppingConditionInput`<sup>Optional</sup> <a name="StoppingConditionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingConditionInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobStoppingCondition StoppingConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProcessingJobName`<sup>Required</sup> <a name="ProcessingJobName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobName"></a>

```csharp
public string ProcessingJobName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerProcessingJobAppSpecification <a name="SagemakerProcessingJobAppSpecification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobAppSpecification {
    string ImageUri,
    string[] ContainerArguments = null,
    string[] ContainerEntrypoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.imageUri">ImageUri</a></code> | <code>string</code> | The container image to be run by the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerArguments">ContainerArguments</a></code> | <code>string[]</code> | The arguments for a container used to run a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>string[]</code> | The entrypoint for a container used to run a processing job. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

The container image to be run by the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#image_uri SagemakerProcessingJob#image_uri}

---

##### `ContainerArguments`<sup>Optional</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerArguments"></a>

```csharp
public string[] ContainerArguments { get; set; }
```

- *Type:* string[]

The arguments for a container used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#container_arguments SagemakerProcessingJob#container_arguments}

---

##### `ContainerEntrypoint`<sup>Optional</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerEntrypoint"></a>

```csharp
public string[] ContainerEntrypoint { get; set; }
```

- *Type:* string[]

The entrypoint for a container used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#container_entrypoint SagemakerProcessingJob#container_entrypoint}

---

### SagemakerProcessingJobConfig <a name="SagemakerProcessingJobConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SagemakerProcessingJobAppSpecification AppSpecification,
    SagemakerProcessingJobProcessingResources ProcessingResources,
    string RoleArn,
    System.Collections.Generic.IDictionary<string, string> Environment = null,
    SagemakerProcessingJobExperimentConfig ExperimentConfig = null,
    SagemakerProcessingJobNetworkConfig NetworkConfig = null,
    IResolvable|SagemakerProcessingJobProcessingInputs[] ProcessingInputs = null,
    string ProcessingJobName = null,
    SagemakerProcessingJobProcessingOutputConfig ProcessingOutputConfig = null,
    SagemakerProcessingJobStoppingCondition StoppingCondition = null,
    IResolvable|SagemakerProcessingJobTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.appSpecification">AppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | Configures the processing job to run a specified Docker container image. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingResources">ProcessingResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.environment">Environment</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.experimentConfig">ExperimentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | Associates a SageMaker job as a trial component with an experiment and trial. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingInputs">ProcessingInputs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]</code> | An array of inputs configuring the data to download into the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingJobName">ProcessingJobName</a></code> | <code>string</code> | The name of the processing job. The name must be unique within an AWS Region in the AWS account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingOutputConfig">ProcessingOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | Configuration for uploading output from the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]</code> | (Optional) An array of key-value pairs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppSpecification`<sup>Required</sup> <a name="AppSpecification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.appSpecification"></a>

```csharp
public SagemakerProcessingJobAppSpecification AppSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

Configures the processing job to run a specified Docker container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#app_specification SagemakerProcessingJob#app_specification}

---

##### `ProcessingResources`<sup>Required</sup> <a name="ProcessingResources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingResources"></a>

```csharp
public SagemakerProcessingJobProcessingResources ProcessingResources { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job.

In distributed training, you specify more than one instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_resources SagemakerProcessingJob#processing_resources}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#role_arn SagemakerProcessingJob#role_arn}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.environment"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Environment { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#environment SagemakerProcessingJob#environment}

---

##### `ExperimentConfig`<sup>Optional</sup> <a name="ExperimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.experimentConfig"></a>

```csharp
public SagemakerProcessingJobExperimentConfig ExperimentConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

Associates a SageMaker job as a trial component with an experiment and trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#experiment_config SagemakerProcessingJob#experiment_config}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.networkConfig"></a>

```csharp
public SagemakerProcessingJobNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#network_config SagemakerProcessingJob#network_config}

---

##### `ProcessingInputs`<sup>Optional</sup> <a name="ProcessingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingInputs"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputs[] ProcessingInputs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]

An array of inputs configuring the data to download into the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_inputs SagemakerProcessingJob#processing_inputs}

---

##### `ProcessingJobName`<sup>Optional</sup> <a name="ProcessingJobName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingJobName"></a>

```csharp
public string ProcessingJobName { get; set; }
```

- *Type:* string

The name of the processing job. The name must be unique within an AWS Region in the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_job_name SagemakerProcessingJob#processing_job_name}

---

##### `ProcessingOutputConfig`<sup>Optional</sup> <a name="ProcessingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingOutputConfig"></a>

```csharp
public SagemakerProcessingJobProcessingOutputConfig ProcessingOutputConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

Configuration for uploading output from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_output_config SagemakerProcessingJob#processing_output_config}

---

##### `StoppingCondition`<sup>Optional</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.stoppingCondition"></a>

```csharp
public SagemakerProcessingJobStoppingCondition StoppingCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

Configures conditions under which the processing job should be stopped, such as how long the processing job has been running.

After the condition is met, the processing job is stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#stopping_condition SagemakerProcessingJob#stopping_condition}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerProcessingJobTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]

(Optional) An array of key-value pairs.

For more information, see Using Cost Allocation Tags(https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the AWS Billing and Cost Management User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#tags SagemakerProcessingJob#tags}

---

### SagemakerProcessingJobExperimentConfig <a name="SagemakerProcessingJobExperimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobExperimentConfig {
    string ExperimentName = null,
    string RunName = null,
    string TrialComponentDisplayName = null,
    string TrialName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.experimentName">ExperimentName</a></code> | <code>string</code> | The name of an existing experiment to associate with the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.runName">RunName</a></code> | <code>string</code> | The name of the experiment run to associate with the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialComponentDisplayName">TrialComponentDisplayName</a></code> | <code>string</code> | The display name for the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialName">TrialName</a></code> | <code>string</code> | The name of an existing trial to associate the trial component with. |

---

##### `ExperimentName`<sup>Optional</sup> <a name="ExperimentName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.experimentName"></a>

```csharp
public string ExperimentName { get; set; }
```

- *Type:* string

The name of an existing experiment to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#experiment_name SagemakerProcessingJob#experiment_name}

---

##### `RunName`<sup>Optional</sup> <a name="RunName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.runName"></a>

```csharp
public string RunName { get; set; }
```

- *Type:* string

The name of the experiment run to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#run_name SagemakerProcessingJob#run_name}

---

##### `TrialComponentDisplayName`<sup>Optional</sup> <a name="TrialComponentDisplayName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialComponentDisplayName"></a>

```csharp
public string TrialComponentDisplayName { get; set; }
```

- *Type:* string

The display name for the trial component.

If this key isn't specified, the display name is the trial component name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#trial_component_display_name SagemakerProcessingJob#trial_component_display_name}

---

##### `TrialName`<sup>Optional</sup> <a name="TrialName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialName"></a>

```csharp
public string TrialName { get; set; }
```

- *Type:* string

The name of an existing trial to associate the trial component with.

If not specified, a new trial is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#trial_name SagemakerProcessingJob#trial_name}

---

### SagemakerProcessingJobNetworkConfig <a name="SagemakerProcessingJobNetworkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobNetworkConfig {
    bool|IResolvable EnableInterContainerTrafficEncryption = null,
    bool|IResolvable EnableNetworkIsolation = null,
    SagemakerProcessingJobNetworkConfigVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `EnableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```csharp
public bool|IResolvable EnableInterContainerTrafficEncryption { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#enable_inter_container_traffic_encryption SagemakerProcessingJob#enable_inter_container_traffic_encryption}

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableNetworkIsolation"></a>

```csharp
public bool|IResolvable EnableNetworkIsolation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#enable_network_isolation SagemakerProcessingJob#enable_network_isolation}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.vpcConfig"></a>

```csharp
public SagemakerProcessingJobNetworkConfigVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#vpc_config SagemakerProcessingJob#vpc_config}

---

### SagemakerProcessingJobNetworkConfigVpcConfig <a name="SagemakerProcessingJobNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobNetworkConfigVpcConfig {
    string[] SecurityGroupIds = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The VPC security group IDs, in the form 'sg-xxxxxxxx'. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The VPC security group IDs, in the form 'sg-xxxxxxxx'.

Specify the security groups for the VPC that is specified in the 'Subnets' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#security_group_ids SagemakerProcessingJob#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The ID of the subnets in the VPC to which you want to connect your training job or model.

For information about the availability of specific instance types, see https://docs.aws.amazon.com/sagemaker/latest/dg/regions-quotas.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#subnets SagemakerProcessingJob#subnets}

---

### SagemakerProcessingJobProcessingInputs <a name="SagemakerProcessingJobProcessingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputs {
    bool|IResolvable AppManaged = null,
    SagemakerProcessingJobProcessingInputsDatasetDefinition DatasetDefinition = null,
    string InputName = null,
    SagemakerProcessingJobProcessingInputsS3Input S3Input = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.appManaged">AppManaged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When True, input operations such as data download are managed natively by the processing job application. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.datasetDefinition">DatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.inputName">InputName</a></code> | <code>string</code> | The name for the processing job input. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.s3Input">S3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a></code> | Configuration for downloading input data from Amazon S3 into the processing container. |

---

##### `AppManaged`<sup>Optional</sup> <a name="AppManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.appManaged"></a>

```csharp
public bool|IResolvable AppManaged { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When True, input operations such as data download are managed natively by the processing job application.

When False (default), input operations are managed by Amazon SageMaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#app_managed SagemakerProcessingJob#app_managed}

---

##### `DatasetDefinition`<sup>Optional</sup> <a name="DatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.datasetDefinition"></a>

```csharp
public SagemakerProcessingJobProcessingInputsDatasetDefinition DatasetDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#dataset_definition SagemakerProcessingJob#dataset_definition}

---

##### `InputName`<sup>Optional</sup> <a name="InputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.inputName"></a>

```csharp
public string InputName { get; set; }
```

- *Type:* string

The name for the processing job input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#input_name SagemakerProcessingJob#input_name}

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.s3Input"></a>

```csharp
public SagemakerProcessingJobProcessingInputsS3Input S3Input { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

Configuration for downloading input data from Amazon S3 into the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_input SagemakerProcessingJob#s3_input}

---

### SagemakerProcessingJobProcessingInputsDatasetDefinition <a name="SagemakerProcessingJobProcessingInputsDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsDatasetDefinition {
    SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition AthenaDatasetDefinition = null,
    string DataDistributionType = null,
    string InputMode = null,
    string LocalPath = null,
    SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition RedshiftDatasetDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.athenaDatasetDefinition">AthenaDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | Configuration for Athena Dataset Definition input. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.dataDistributionType">DataDistributionType</a></code> | <code>string</code> | Whether the generated dataset is FullyReplicated or ShardedByS3Key (default). |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.inputMode">InputMode</a></code> | <code>string</code> | Whether to use File or Pipe input mode. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.localPath">LocalPath</a></code> | <code>string</code> | The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.redshiftDatasetDefinition">RedshiftDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | Configuration for Redshift Dataset Definition input. |

---

##### `AthenaDatasetDefinition`<sup>Optional</sup> <a name="AthenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.athenaDatasetDefinition"></a>

```csharp
public SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition AthenaDatasetDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

Configuration for Athena Dataset Definition input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#athena_dataset_definition SagemakerProcessingJob#athena_dataset_definition}

---

##### `DataDistributionType`<sup>Optional</sup> <a name="DataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.dataDistributionType"></a>

```csharp
public string DataDistributionType { get; set; }
```

- *Type:* string

Whether the generated dataset is FullyReplicated or ShardedByS3Key (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#data_distribution_type SagemakerProcessingJob#data_distribution_type}

---

##### `InputMode`<sup>Optional</sup> <a name="InputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.inputMode"></a>

```csharp
public string InputMode { get; set; }
```

- *Type:* string

Whether to use File or Pipe input mode.

In File (default) mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#input_mode SagemakerProcessingJob#input_mode}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job.

LocalPath is an absolute path to the input data. This is a required parameter when AppManaged is False (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

##### `RedshiftDatasetDefinition`<sup>Optional</sup> <a name="RedshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.redshiftDatasetDefinition"></a>

```csharp
public SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition RedshiftDatasetDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

Configuration for Redshift Dataset Definition input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#redshift_dataset_definition SagemakerProcessingJob#redshift_dataset_definition}

---

### SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition {
    string Catalog = null,
    string Database = null,
    string KmsKeyId = null,
    string OutputCompression = null,
    string OutputFormat = null,
    string OutputS3Uri = null,
    string QueryString = null,
    string WorkGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.catalog">Catalog</a></code> | <code>string</code> | The name of the data catalog used in Athena query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.database">Database</a></code> | <code>string</code> | The name of the database used in the Athena query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputCompression">OutputCompression</a></code> | <code>string</code> | The compression used for Athena query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputFormat">OutputFormat</a></code> | <code>string</code> | The data storage format for Athena query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputS3Uri">OutputS3Uri</a></code> | <code>string</code> | The location in Amazon S3 where Athena query results are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.queryString">QueryString</a></code> | <code>string</code> | The SQL query statements, to be executed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.workGroup">WorkGroup</a></code> | <code>string</code> | The name of the workgroup in which the Athena query is being started. |

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

The name of the data catalog used in Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#catalog SagemakerProcessingJob#catalog}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The name of the database used in the Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

##### `OutputCompression`<sup>Optional</sup> <a name="OutputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputCompression"></a>

```csharp
public string OutputCompression { get; set; }
```

- *Type:* string

The compression used for Athena query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

The data storage format for Athena query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}

---

##### `OutputS3Uri`<sup>Optional</sup> <a name="OutputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputS3Uri"></a>

```csharp
public string OutputS3Uri { get; set; }
```

- *Type:* string

The location in Amazon S3 where Athena query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.queryString"></a>

```csharp
public string QueryString { get; set; }
```

- *Type:* string

The SQL query statements, to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}

---

##### `WorkGroup`<sup>Optional</sup> <a name="WorkGroup" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.workGroup"></a>

```csharp
public string WorkGroup { get; set; }
```

- *Type:* string

The name of the workgroup in which the Athena query is being started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#work_group SagemakerProcessingJob#work_group}

---

### SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition {
    string ClusterId = null,
    string ClusterRoleArn = null,
    string Database = null,
    string DbUser = null,
    string KmsKeyId = null,
    string OutputCompression = null,
    string OutputFormat = null,
    string OutputS3Uri = null,
    string QueryString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterId">ClusterId</a></code> | <code>string</code> | The Redshift cluster Identifier. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterRoleArn">ClusterRoleArn</a></code> | <code>string</code> | The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.database">Database</a></code> | <code>string</code> | The name of the Redshift database used in Redshift query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.dbUser">DbUser</a></code> | <code>string</code> | The database user name used in Redshift query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputCompression">OutputCompression</a></code> | <code>string</code> | The compression used for Redshift query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputFormat">OutputFormat</a></code> | <code>string</code> | The data storage format for Redshift query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputS3Uri">OutputS3Uri</a></code> | <code>string</code> | The location in Amazon S3 where the Redshift query results are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.queryString">QueryString</a></code> | <code>string</code> | The SQL query statements to be executed. |

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The Redshift cluster Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#cluster_id SagemakerProcessingJob#cluster_id}

---

##### `ClusterRoleArn`<sup>Optional</sup> <a name="ClusterRoleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterRoleArn"></a>

```csharp
public string ClusterRoleArn { get; set; }
```

- *Type:* string

The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#cluster_role_arn SagemakerProcessingJob#cluster_role_arn}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The name of the Redshift database used in Redshift query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}

---

##### `DbUser`<sup>Optional</sup> <a name="DbUser" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.dbUser"></a>

```csharp
public string DbUser { get; set; }
```

- *Type:* string

The database user name used in Redshift query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#db_user SagemakerProcessingJob#db_user}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

##### `OutputCompression`<sup>Optional</sup> <a name="OutputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputCompression"></a>

```csharp
public string OutputCompression { get; set; }
```

- *Type:* string

The compression used for Redshift query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

The data storage format for Redshift query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}

---

##### `OutputS3Uri`<sup>Optional</sup> <a name="OutputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputS3Uri"></a>

```csharp
public string OutputS3Uri { get; set; }
```

- *Type:* string

The location in Amazon S3 where the Redshift query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.queryString"></a>

```csharp
public string QueryString { get; set; }
```

- *Type:* string

The SQL query statements to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}

---

### SagemakerProcessingJobProcessingInputsS3Input <a name="SagemakerProcessingJobProcessingInputsS3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsS3Input {
    string LocalPath = null,
    string S3CompressionType = null,
    string S3DataDistributionType = null,
    string S3DataType = null,
    string S3InputMode = null,
    string S3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.localPath">LocalPath</a></code> | <code>string</code> | The local path in your container where you want Amazon SageMaker to write input data to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3CompressionType">S3CompressionType</a></code> | <code>string</code> | Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>string</code> | Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataType">S3DataType</a></code> | <code>string</code> | Whether you use an S3Prefix or a ManifestFile for the data type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3InputMode">S3InputMode</a></code> | <code>string</code> | Whether to use File or Pipe input mode. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3Uri">S3Uri</a></code> | <code>string</code> | The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job. |

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

The local path in your container where you want Amazon SageMaker to write input data to.

`LocalPath` is an absolute path to the input data and must begin with `/opt/ml/processing/`. LocalPath is a required parameter when `AppManaged` is `False` (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

##### `S3CompressionType`<sup>Optional</sup> <a name="S3CompressionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3CompressionType"></a>

```csharp
public string S3CompressionType { get; set; }
```

- *Type:* string

Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container.

`Gzip` can only be used when `Pipe` mode is specified as the `S3InputMode`. In `Pipe` mode, Amazon SageMaker streams input data from the source directly to your container without using the EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_compression_type SagemakerProcessingJob#s3_compression_type}

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataDistributionType"></a>

```csharp
public string S3DataDistributionType { get; set; }
```

- *Type:* string

Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_data_distribution_type SagemakerProcessingJob#s3_data_distribution_type}

---

##### `S3DataType`<sup>Optional</sup> <a name="S3DataType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataType"></a>

```csharp
public string S3DataType { get; set; }
```

- *Type:* string

Whether you use an S3Prefix or a ManifestFile for the data type.

If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing job. If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_data_type SagemakerProcessingJob#s3_data_type}

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3InputMode"></a>

```csharp
public string S3InputMode { get; set; }
```

- *Type:* string

Whether to use File or Pipe input mode.

In File mode, Amazon SageMaker copies the data from the input source onto the local ML storage volume before starting your processing container. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your processing container into named pipes without using the ML storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_input_mode SagemakerProcessingJob#s3_input_mode}

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}

---

### SagemakerProcessingJobProcessingOutputConfig <a name="SagemakerProcessingJobProcessingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingOutputConfig {
    string KmsKeyId = null,
    IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputs[] Outputs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.outputs">Outputs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]</code> | An array of outputs configuring the data to upload from the processing container. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output.

KmsKeyId can be an ID of a KMS key, ARN of a KMS key, or alias of a KMS key. The KmsKeyId is applied to all outputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

##### `Outputs`<sup>Optional</sup> <a name="Outputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.outputs"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputs[] Outputs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]

An array of outputs configuring the data to upload from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#outputs SagemakerProcessingJob#outputs}

---

### SagemakerProcessingJobProcessingOutputConfigOutputs <a name="SagemakerProcessingJobProcessingOutputConfigOutputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingOutputConfigOutputs {
    bool|IResolvable AppManaged = null,
    SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput FeatureStoreOutput = null,
    string OutputName = null,
    SagemakerProcessingJobProcessingOutputConfigOutputsS3Output S3Output = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.appManaged">AppManaged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When True, output operations such as data upload are managed natively by the processing job application. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.featureStoreOutput">FeatureStoreOutput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | Configuration for processing job outputs in Amazon SageMaker Feature Store. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.outputName">OutputName</a></code> | <code>string</code> | The name for the processing job output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | Configuration for uploading output data to Amazon S3 from the processing container. |

---

##### `AppManaged`<sup>Optional</sup> <a name="AppManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.appManaged"></a>

```csharp
public bool|IResolvable AppManaged { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When True, output operations such as data upload are managed natively by the processing job application.

When False (default), output operations are managed by Amazon SageMaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#app_managed SagemakerProcessingJob#app_managed}

---

##### `FeatureStoreOutput`<sup>Optional</sup> <a name="FeatureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.featureStoreOutput"></a>

```csharp
public SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput FeatureStoreOutput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

Configuration for processing job outputs in Amazon SageMaker Feature Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#feature_store_output SagemakerProcessingJob#feature_store_output}

---

##### `OutputName`<sup>Optional</sup> <a name="OutputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.outputName"></a>

```csharp
public string OutputName { get; set; }
```

- *Type:* string

The name for the processing job output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_name SagemakerProcessingJob#output_name}

---

##### `S3Output`<sup>Optional</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.s3Output"></a>

```csharp
public SagemakerProcessingJobProcessingOutputConfigOutputsS3Output S3Output { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

Configuration for uploading output data to Amazon S3 from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_output SagemakerProcessingJob#s3_output}

---

### SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput <a name="SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput {
    string FeatureGroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.property.featureGroupName">FeatureGroupName</a></code> | <code>string</code> | The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. |

---

##### `FeatureGroupName`<sup>Optional</sup> <a name="FeatureGroupName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.property.featureGroupName"></a>

```csharp
public string FeatureGroupName { get; set; }
```

- *Type:* string

The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output.

Note that your processing script is responsible for putting records into your Feature Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#feature_group_name SagemakerProcessingJob#feature_group_name}

---

### SagemakerProcessingJobProcessingOutputConfigOutputsS3Output <a name="SagemakerProcessingJobProcessingOutputConfigOutputsS3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingOutputConfigOutputsS3Output {
    string LocalPath = null,
    string S3UploadMode = null,
    string S3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.localPath">LocalPath</a></code> | <code>string</code> | The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3UploadMode">S3UploadMode</a></code> | <code>string</code> | Whether to upload the results of the processing job continuously or after the job completes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3Uri">S3Uri</a></code> | <code>string</code> | A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job. |

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.localPath"></a>

```csharp
public string LocalPath { get; set; }
```

- *Type:* string

The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3.

LocalPath is an absolute path to a directory containing output files. This directory will be created by the platform and exist when your container's entrypoint is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

##### `S3UploadMode`<sup>Optional</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3UploadMode"></a>

```csharp
public string S3UploadMode { get; set; }
```

- *Type:* string

Whether to upload the results of the processing job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_upload_mode SagemakerProcessingJob#s3_upload_mode}

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}

---

### SagemakerProcessingJobProcessingResources <a name="SagemakerProcessingJobProcessingResources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingResources {
    SagemakerProcessingJobProcessingResourcesClusterConfig ClusterConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | Configuration for the cluster used to run a processing job. |

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources.property.clusterConfig"></a>

```csharp
public SagemakerProcessingJobProcessingResourcesClusterConfig ClusterConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

Configuration for the cluster used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#cluster_config SagemakerProcessingJob#cluster_config}

---

### SagemakerProcessingJobProcessingResourcesClusterConfig <a name="SagemakerProcessingJobProcessingResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingResourcesClusterConfig {
    double InstanceCount,
    string InstanceType,
    double VolumeSizeInGb,
    string VolumeKmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | The number of ML compute instances to use in the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | The size of the ML storage volume in gigabytes that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job. |

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

The number of ML compute instances to use in the processing job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#instance_count SagemakerProcessingJob#instance_count}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#instance_type SagemakerProcessingJob#instance_type}

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; set; }
```

- *Type:* double

The size of the ML storage volume in gigabytes that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#volume_size_in_gb SagemakerProcessingJob#volume_size_in_gb}

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; set; }
```

- *Type:* string

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#volume_kms_key_id SagemakerProcessingJob#volume_kms_key_id}

---

### SagemakerProcessingJobStoppingCondition <a name="SagemakerProcessingJobStoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobStoppingCondition {
    double MaxRuntimeInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>double</code> | Specifies the maximum runtime in seconds. |

---

##### `MaxRuntimeInSeconds`<sup>Optional</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition.property.maxRuntimeInSeconds"></a>

```csharp
public double MaxRuntimeInSeconds { get; set; }
```

- *Type:* double

Specifies the maximum runtime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#max_runtime_in_seconds SagemakerProcessingJob#max_runtime_in_seconds}

---

### SagemakerProcessingJobTags <a name="SagemakerProcessingJobTags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.key">Key</a></code> | <code>string</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#key SagemakerProcessingJob#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#value SagemakerProcessingJob#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerProcessingJobAppSpecificationOutputReference <a name="SagemakerProcessingJobAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobAppSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerArguments">ResetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerEntrypoint">ResetContainerEntrypoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerArguments` <a name="ResetContainerArguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerArguments"></a>

```csharp
private void ResetContainerArguments()
```

##### `ResetContainerEntrypoint` <a name="ResetContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerEntrypoint"></a>

```csharp
private void ResetContainerEntrypoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArgumentsInput">ContainerArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypointInput">ContainerEntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerArgumentsInput`<sup>Optional</sup> <a name="ContainerArgumentsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArgumentsInput"></a>

```csharp
public string[] ContainerArgumentsInput { get; }
```

- *Type:* string[]

---

##### `ContainerEntrypointInput`<sup>Optional</sup> <a name="ContainerEntrypointInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypointInput"></a>

```csharp
public string[] ContainerEntrypointInput { get; }
```

- *Type:* string[]

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments"></a>

```csharp
public string[] ContainerArguments { get; }
```

- *Type:* string[]

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint"></a>

```csharp
public string[] ContainerEntrypoint { get; }
```

- *Type:* string[]

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobAppSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

---


### SagemakerProcessingJobExperimentConfigOutputReference <a name="SagemakerProcessingJobExperimentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobExperimentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetExperimentName">ResetExperimentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetRunName">ResetRunName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialComponentDisplayName">ResetTrialComponentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialName">ResetTrialName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExperimentName` <a name="ResetExperimentName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetExperimentName"></a>

```csharp
private void ResetExperimentName()
```

##### `ResetRunName` <a name="ResetRunName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetRunName"></a>

```csharp
private void ResetRunName()
```

##### `ResetTrialComponentDisplayName` <a name="ResetTrialComponentDisplayName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialComponentDisplayName"></a>

```csharp
private void ResetTrialComponentDisplayName()
```

##### `ResetTrialName` <a name="ResetTrialName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialName"></a>

```csharp
private void ResetTrialName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentNameInput">ExperimentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runNameInput">RunNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayNameInput">TrialComponentDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialNameInput">TrialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentName">ExperimentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runName">RunName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName">TrialComponentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialName">TrialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExperimentNameInput`<sup>Optional</sup> <a name="ExperimentNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentNameInput"></a>

```csharp
public string ExperimentNameInput { get; }
```

- *Type:* string

---

##### `RunNameInput`<sup>Optional</sup> <a name="RunNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runNameInput"></a>

```csharp
public string RunNameInput { get; }
```

- *Type:* string

---

##### `TrialComponentDisplayNameInput`<sup>Optional</sup> <a name="TrialComponentDisplayNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayNameInput"></a>

```csharp
public string TrialComponentDisplayNameInput { get; }
```

- *Type:* string

---

##### `TrialNameInput`<sup>Optional</sup> <a name="TrialNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialNameInput"></a>

```csharp
public string TrialNameInput { get; }
```

- *Type:* string

---

##### `ExperimentName`<sup>Required</sup> <a name="ExperimentName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentName"></a>

```csharp
public string ExperimentName { get; }
```

- *Type:* string

---

##### `RunName`<sup>Required</sup> <a name="RunName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runName"></a>

```csharp
public string RunName { get; }
```

- *Type:* string

---

##### `TrialComponentDisplayName`<sup>Required</sup> <a name="TrialComponentDisplayName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName"></a>

```csharp
public string TrialComponentDisplayName { get; }
```

- *Type:* string

---

##### `TrialName`<sup>Required</sup> <a name="TrialName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialName"></a>

```csharp
public string TrialName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobExperimentConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

---


### SagemakerProcessingJobNetworkConfigOutputReference <a name="SagemakerProcessingJobNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">ResetEnableInterContainerTrafficEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig"></a>

```csharp
private void PutVpcConfig(SagemakerProcessingJobNetworkConfigVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

---

##### `ResetEnableInterContainerTrafficEncryption` <a name="ResetEnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```csharp
private void ResetEnableInterContainerTrafficEncryption()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```csharp
private void ResetEnableNetworkIsolation()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference">SagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">EnableInterContainerTrafficEncryptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig"></a>

```csharp
public SagemakerProcessingJobNetworkConfigVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference">SagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a>

---

##### `EnableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryptionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```csharp
public bool|IResolvable EnableInterContainerTrafficEncryptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```csharp
public bool|IResolvable EnableNetworkIsolationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfigInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobNetworkConfigVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

---

##### `EnableInterContainerTrafficEncryption`<sup>Required</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```csharp
public bool|IResolvable EnableInterContainerTrafficEncryption { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```csharp
public bool|IResolvable EnableNetworkIsolation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobNetworkConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

---


### SagemakerProcessingJobNetworkConfigVpcConfigOutputReference <a name="SagemakerProcessingJobNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobNetworkConfigVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobNetworkConfigVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

---


### SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputCompression">ResetOutputCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputS3Uri">ResetOutputS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetWorkGroup">ResetWorkGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetOutputCompression` <a name="ResetOutputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputCompression"></a>

```csharp
private void ResetOutputCompression()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```

##### `ResetOutputS3Uri` <a name="ResetOutputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputS3Uri"></a>

```csharp
private void ResetOutputS3Uri()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetQueryString"></a>

```csharp
private void ResetQueryString()
```

##### `ResetWorkGroup` <a name="ResetWorkGroup" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetWorkGroup"></a>

```csharp
private void ResetWorkGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompressionInput">OutputCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3UriInput">OutputS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroupInput">WorkGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression">OutputCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri">OutputS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString">QueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup">WorkGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `OutputCompressionInput`<sup>Optional</sup> <a name="OutputCompressionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompressionInput"></a>

```csharp
public string OutputCompressionInput { get; }
```

- *Type:* string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `OutputS3UriInput`<sup>Optional</sup> <a name="OutputS3UriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3UriInput"></a>

```csharp
public string OutputS3UriInput { get; }
```

- *Type:* string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryStringInput"></a>

```csharp
public string QueryStringInput { get; }
```

- *Type:* string

---

##### `WorkGroupInput`<sup>Optional</sup> <a name="WorkGroupInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroupInput"></a>

```csharp
public string WorkGroupInput { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `OutputCompression`<sup>Required</sup> <a name="OutputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression"></a>

```csharp
public string OutputCompression { get; }
```

- *Type:* string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `OutputS3Uri`<sup>Required</sup> <a name="OutputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```csharp
public string OutputS3Uri { get; }
```

- *Type:* string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString"></a>

```csharp
public string QueryString { get; }
```

- *Type:* string

---

##### `WorkGroup`<sup>Required</sup> <a name="WorkGroup" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup"></a>

```csharp
public string WorkGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---


### SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition">PutAthenaDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition">PutRedshiftDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetAthenaDatasetDefinition">ResetAthenaDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetDataDistributionType">ResetDataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetInputMode">ResetInputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetRedshiftDatasetDefinition">ResetRedshiftDatasetDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAthenaDatasetDefinition` <a name="PutAthenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition"></a>

```csharp
private void PutAthenaDatasetDefinition(SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---

##### `PutRedshiftDatasetDefinition` <a name="PutRedshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition"></a>

```csharp
private void PutRedshiftDatasetDefinition(SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---

##### `ResetAthenaDatasetDefinition` <a name="ResetAthenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetAthenaDatasetDefinition"></a>

```csharp
private void ResetAthenaDatasetDefinition()
```

##### `ResetDataDistributionType` <a name="ResetDataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetDataDistributionType"></a>

```csharp
private void ResetDataDistributionType()
```

##### `ResetInputMode` <a name="ResetInputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetInputMode"></a>

```csharp
private void ResetInputMode()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```

##### `ResetRedshiftDatasetDefinition` <a name="ResetRedshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetRedshiftDatasetDefinition"></a>

```csharp
private void ResetRedshiftDatasetDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition">AthenaDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition">RedshiftDatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinitionInput">AthenaDatasetDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionTypeInput">DataDistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputModeInput">InputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinitionInput">RedshiftDatasetDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType">DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode">InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AthenaDatasetDefinition`<sup>Required</sup> <a name="AthenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition"></a>

```csharp
public SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference AthenaDatasetDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a>

---

##### `RedshiftDatasetDefinition`<sup>Required</sup> <a name="RedshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition"></a>

```csharp
public SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference RedshiftDatasetDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a>

---

##### `AthenaDatasetDefinitionInput`<sup>Optional</sup> <a name="AthenaDatasetDefinitionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinitionInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition AthenaDatasetDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---

##### `DataDistributionTypeInput`<sup>Optional</sup> <a name="DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionTypeInput"></a>

```csharp
public string DataDistributionTypeInput { get; }
```

- *Type:* string

---

##### `InputModeInput`<sup>Optional</sup> <a name="InputModeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputModeInput"></a>

```csharp
public string InputModeInput { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `RedshiftDatasetDefinitionInput`<sup>Optional</sup> <a name="RedshiftDatasetDefinitionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinitionInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition RedshiftDatasetDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---

##### `DataDistributionType`<sup>Required</sup> <a name="DataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType"></a>

```csharp
public string DataDistributionType { get; }
```

- *Type:* string

---

##### `InputMode`<sup>Required</sup> <a name="InputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode"></a>

```csharp
public string InputMode { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputsDatasetDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---


### SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterRoleArn">ResetClusterRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDbUser">ResetDbUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputCompression">ResetOutputCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputS3Uri">ResetOutputS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetClusterRoleArn` <a name="ResetClusterRoleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterRoleArn"></a>

```csharp
private void ResetClusterRoleArn()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDbUser` <a name="ResetDbUser" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDbUser"></a>

```csharp
private void ResetDbUser()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetOutputCompression` <a name="ResetOutputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputCompression"></a>

```csharp
private void ResetOutputCompression()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```

##### `ResetOutputS3Uri` <a name="ResetOutputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputS3Uri"></a>

```csharp
private void ResetOutputS3Uri()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetQueryString"></a>

```csharp
private void ResetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArnInput">ClusterRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUserInput">DbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompressionInput">OutputCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3UriInput">OutputS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn">ClusterRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser">DbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression">OutputCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri">OutputS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString">QueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ClusterRoleArnInput`<sup>Optional</sup> <a name="ClusterRoleArnInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArnInput"></a>

```csharp
public string ClusterRoleArnInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DbUserInput`<sup>Optional</sup> <a name="DbUserInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUserInput"></a>

```csharp
public string DbUserInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `OutputCompressionInput`<sup>Optional</sup> <a name="OutputCompressionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompressionInput"></a>

```csharp
public string OutputCompressionInput { get; }
```

- *Type:* string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `OutputS3UriInput`<sup>Optional</sup> <a name="OutputS3UriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3UriInput"></a>

```csharp
public string OutputS3UriInput { get; }
```

- *Type:* string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryStringInput"></a>

```csharp
public string QueryStringInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ClusterRoleArn`<sup>Required</sup> <a name="ClusterRoleArn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn"></a>

```csharp
public string ClusterRoleArn { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser"></a>

```csharp
public string DbUser { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `OutputCompression`<sup>Required</sup> <a name="OutputCompression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression"></a>

```csharp
public string OutputCompression { get; }
```

- *Type:* string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `OutputS3Uri`<sup>Required</sup> <a name="OutputS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```csharp
public string OutputS3Uri { get; }
```

- *Type:* string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString"></a>

```csharp
public string QueryString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---


### SagemakerProcessingJobProcessingInputsList <a name="SagemakerProcessingJobProcessingInputsList" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.get"></a>

```csharp
private SagemakerProcessingJobProcessingInputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>[]

---


### SagemakerProcessingJobProcessingInputsOutputReference <a name="SagemakerProcessingJobProcessingInputsOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition">PutDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input">PutS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetAppManaged">ResetAppManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetDatasetDefinition">ResetDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetInputName">ResetInputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetS3Input">ResetS3Input</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetDefinition` <a name="PutDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition"></a>

```csharp
private void PutDatasetDefinition(SagemakerProcessingJobProcessingInputsDatasetDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---

##### `PutS3Input` <a name="PutS3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input"></a>

```csharp
private void PutS3Input(SagemakerProcessingJobProcessingInputsS3Input Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

---

##### `ResetAppManaged` <a name="ResetAppManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetAppManaged"></a>

```csharp
private void ResetAppManaged()
```

##### `ResetDatasetDefinition` <a name="ResetDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetDatasetDefinition"></a>

```csharp
private void ResetDatasetDefinition()
```

##### `ResetInputName` <a name="ResetInputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetInputName"></a>

```csharp
private void ResetInputName()
```

##### `ResetS3Input` <a name="ResetS3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetS3Input"></a>

```csharp
private void ResetS3Input()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition">DatasetDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference">SagemakerProcessingJobProcessingInputsS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManagedInput">AppManagedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinitionInput">DatasetDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputNameInput">InputNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3InputInput">S3InputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManaged">AppManaged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputName">InputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetDefinition`<sup>Required</sup> <a name="DatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition"></a>

```csharp
public SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference DatasetDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a>

---

##### `S3Input`<sup>Required</sup> <a name="S3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3Input"></a>

```csharp
public SagemakerProcessingJobProcessingInputsS3InputOutputReference S3Input { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference">SagemakerProcessingJobProcessingInputsS3InputOutputReference</a>

---

##### `AppManagedInput`<sup>Optional</sup> <a name="AppManagedInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManagedInput"></a>

```csharp
public bool|IResolvable AppManagedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatasetDefinitionInput`<sup>Optional</sup> <a name="DatasetDefinitionInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinitionInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputsDatasetDefinition DatasetDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---

##### `InputNameInput`<sup>Optional</sup> <a name="InputNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputNameInput"></a>

```csharp
public string InputNameInput { get; }
```

- *Type:* string

---

##### `S3InputInput`<sup>Optional</sup> <a name="S3InputInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3InputInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputsS3Input S3InputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

---

##### `AppManaged`<sup>Required</sup> <a name="AppManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManaged"></a>

```csharp
public bool|IResolvable AppManaged { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InputName`<sup>Required</sup> <a name="InputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputName"></a>

```csharp
public string InputName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>

---


### SagemakerProcessingJobProcessingInputsS3InputOutputReference <a name="SagemakerProcessingJobProcessingInputsS3InputOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingInputsS3InputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3CompressionType">ResetS3CompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataType">ResetS3DataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```

##### `ResetS3CompressionType` <a name="ResetS3CompressionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3CompressionType"></a>

```csharp
private void ResetS3CompressionType()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataDistributionType"></a>

```csharp
private void ResetS3DataDistributionType()
```

##### `ResetS3DataType` <a name="ResetS3DataType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataType"></a>

```csharp
private void ResetS3DataType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3InputMode"></a>

```csharp
private void ResetS3InputMode()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3Uri"></a>

```csharp
private void ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionTypeInput">S3CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataTypeInput">S3DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType">S3CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType">S3DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `S3CompressionTypeInput`<sup>Optional</sup> <a name="S3CompressionTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionTypeInput"></a>

```csharp
public string S3CompressionTypeInput { get; }
```

- *Type:* string

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionTypeInput"></a>

```csharp
public string S3DataDistributionTypeInput { get; }
```

- *Type:* string

---

##### `S3DataTypeInput`<sup>Optional</sup> <a name="S3DataTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataTypeInput"></a>

```csharp
public string S3DataTypeInput { get; }
```

- *Type:* string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputModeInput"></a>

```csharp
public string S3InputModeInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `S3CompressionType`<sup>Required</sup> <a name="S3CompressionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType"></a>

```csharp
public string S3CompressionType { get; }
```

- *Type:* string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType"></a>

```csharp
public string S3DataDistributionType { get; }
```

- *Type:* string

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType"></a>

```csharp
public string S3DataType { get; }
```

- *Type:* string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode"></a>

```csharp
public string S3InputMode { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingInputsS3Input InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.putOutputs">PutOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetOutputs">ResetOutputs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutputs` <a name="PutOutputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.putOutputs"></a>

```csharp
private void PutOutputs(IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.putOutputs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetOutputs` <a name="ResetOutputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetOutputs"></a>

```csharp
private void ResetOutputs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList">SagemakerProcessingJobProcessingOutputConfigOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputsInput">OutputsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs"></a>

```csharp
public SagemakerProcessingJobProcessingOutputConfigOutputsList Outputs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList">SagemakerProcessingJobProcessingOutputConfigOutputsList</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `OutputsInput`<sup>Optional</sup> <a name="OutputsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputsInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputs[] OutputsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resetFeatureGroupName">ResetFeatureGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureGroupName` <a name="ResetFeatureGroupName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resetFeatureGroupName"></a>

```csharp
private void ResetFeatureGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupNameInput">FeatureGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName">FeatureGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureGroupNameInput`<sup>Optional</sup> <a name="FeatureGroupNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupNameInput"></a>

```csharp
public string FeatureGroupNameInput { get; }
```

- *Type:* string

---

##### `FeatureGroupName`<sup>Required</sup> <a name="FeatureGroupName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName"></a>

```csharp
public string FeatureGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputsList <a name="SagemakerProcessingJobProcessingOutputConfigOutputsList" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingOutputConfigOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.get"></a>

```csharp
private SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>[]

---


### SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putFeatureStoreOutput">PutFeatureStoreOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output">PutS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetAppManaged">ResetAppManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetFeatureStoreOutput">ResetFeatureStoreOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetOutputName">ResetOutputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetS3Output">ResetS3Output</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFeatureStoreOutput` <a name="PutFeatureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putFeatureStoreOutput"></a>

```csharp
private void PutFeatureStoreOutput(SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putFeatureStoreOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---

##### `PutS3Output` <a name="PutS3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output"></a>

```csharp
private void PutS3Output(SagemakerProcessingJobProcessingOutputConfigOutputsS3Output Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---

##### `ResetAppManaged` <a name="ResetAppManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetAppManaged"></a>

```csharp
private void ResetAppManaged()
```

##### `ResetFeatureStoreOutput` <a name="ResetFeatureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetFeatureStoreOutput"></a>

```csharp
private void ResetFeatureStoreOutput()
```

##### `ResetOutputName` <a name="ResetOutputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetOutputName"></a>

```csharp
private void ResetOutputName()
```

##### `ResetS3Output` <a name="ResetS3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetS3Output"></a>

```csharp
private void ResetS3Output()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput">FeatureStoreOutput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManagedInput">AppManagedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutputInput">FeatureStoreOutputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputNameInput">OutputNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3OutputInput">S3OutputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged">AppManaged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName">OutputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureStoreOutput`<sup>Required</sup> <a name="FeatureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput"></a>

```csharp
public SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference FeatureStoreOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a>

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output"></a>

```csharp
public SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference S3Output { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a>

---

##### `AppManagedInput`<sup>Optional</sup> <a name="AppManagedInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManagedInput"></a>

```csharp
public bool|IResolvable AppManagedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FeatureStoreOutputInput`<sup>Optional</sup> <a name="FeatureStoreOutputInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutputInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput FeatureStoreOutputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---

##### `OutputNameInput`<sup>Optional</sup> <a name="OutputNameInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputNameInput"></a>

```csharp
public string OutputNameInput { get; }
```

- *Type:* string

---

##### `S3OutputInput`<sup>Optional</sup> <a name="S3OutputInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3OutputInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputsS3Output S3OutputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---

##### `AppManaged`<sup>Required</sup> <a name="AppManaged" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged"></a>

```csharp
public bool|IResolvable AppManaged { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OutputName`<sup>Required</sup> <a name="OutputName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName"></a>

```csharp
public string OutputName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3UploadMode">ResetS3UploadMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetLocalPath"></a>

```csharp
private void ResetLocalPath()
```

##### `ResetS3UploadMode` <a name="ResetS3UploadMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```csharp
private void ResetS3UploadMode()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3Uri"></a>

```csharp
private void ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadModeInput">S3UploadModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode">S3UploadMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPathInput"></a>

```csharp
public string LocalPathInput { get; }
```

- *Type:* string

---

##### `S3UploadModeInput`<sup>Optional</sup> <a name="S3UploadModeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```csharp
public string S3UploadModeInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `S3UploadMode`<sup>Required</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```csharp
public string S3UploadMode { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingOutputConfigOutputsS3Output InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---


### SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference <a name="SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```csharp
private void ResetVolumeKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```csharp
public string VolumeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```csharp
public double VolumeSizeInGbInput { get; }
```

- *Type:* double

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingResourcesClusterConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

---


### SagemakerProcessingJobProcessingResourcesOutputReference <a name="SagemakerProcessingJobProcessingResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobProcessingResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig">PutClusterConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig"></a>

```csharp
private void PutClusterConfig(SagemakerProcessingJobProcessingResourcesClusterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfigInput">ClusterConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig"></a>

```csharp
public SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference ClusterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfigInput"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingResourcesClusterConfig ClusterConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobProcessingResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

---


### SagemakerProcessingJobStoppingConditionOutputReference <a name="SagemakerProcessingJobStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobStoppingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resetMaxRuntimeInSeconds">ResetMaxRuntimeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRuntimeInSeconds` <a name="ResetMaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```csharp
private void ResetMaxRuntimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">MaxRuntimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRuntimeInSecondsInput`<sup>Optional</sup> <a name="MaxRuntimeInSecondsInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```csharp
public double MaxRuntimeInSecondsInput { get; }
```

- *Type:* double

---

##### `MaxRuntimeInSeconds`<sup>Required</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```csharp
public double MaxRuntimeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobStoppingCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

---


### SagemakerProcessingJobTagsList <a name="SagemakerProcessingJobTagsList" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.get"></a>

```csharp
private SagemakerProcessingJobTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>[]

---


### SagemakerProcessingJobTagsOutputReference <a name="SagemakerProcessingJobTagsOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerProcessingJobTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerProcessingJobTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>

---



