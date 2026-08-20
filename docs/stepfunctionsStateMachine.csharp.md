# `stepfunctionsStateMachine` Submodule <a name="`stepfunctionsStateMachine` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachine <a name="StepfunctionsStateMachine" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine awscc_stepfunctions_state_machine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachine(Construct Scope, string Id, StepfunctionsStateMachineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig">StepfunctionsStateMachineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig">StepfunctionsStateMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location">PutDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration">PutTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionS3Location">ResetDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionString">ResetDefinitionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionSubstitutions">ResetDefinitionSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineName">ResetStateMachineName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineType">ResetStateMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTracingConfiguration">ResetTracingConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefinitionS3Location` <a name="PutDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location"></a>

```csharp
private void PutDefinitionS3Location(StepfunctionsStateMachineDefinitionS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration"></a>

```csharp
private void PutLoggingConfiguration(StepfunctionsStateMachineLoggingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags"></a>

```csharp
private void PutTags(IResolvable|StepfunctionsStateMachineTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]

---

##### `PutTracingConfiguration` <a name="PutTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration"></a>

```csharp
private void PutTracingConfiguration(StepfunctionsStateMachineTracingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinition"></a>

```csharp
private void ResetDefinition()
```

##### `ResetDefinitionS3Location` <a name="ResetDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionS3Location"></a>

```csharp
private void ResetDefinitionS3Location()
```

##### `ResetDefinitionString` <a name="ResetDefinitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionString"></a>

```csharp
private void ResetDefinitionString()
```

##### `ResetDefinitionSubstitutions` <a name="ResetDefinitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionSubstitutions"></a>

```csharp
private void ResetDefinitionSubstitutions()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetLoggingConfiguration"></a>

```csharp
private void ResetLoggingConfiguration()
```

##### `ResetStateMachineName` <a name="ResetStateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineName"></a>

```csharp
private void ResetStateMachineName()
```

##### `ResetStateMachineType` <a name="ResetStateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineType"></a>

```csharp
private void ResetStateMachineType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTracingConfiguration` <a name="ResetTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTracingConfiguration"></a>

```csharp
private void ResetTracingConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachine resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StepfunctionsStateMachine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StepfunctionsStateMachine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StepfunctionsStateMachine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StepfunctionsStateMachine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StepfunctionsStateMachine resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StepfunctionsStateMachine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StepfunctionsStateMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3Location">DefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference">StepfunctionsStateMachineDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference">StepfunctionsStateMachineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList">StepfunctionsStateMachineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfiguration">TracingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference">StepfunctionsStateMachineTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3LocationInput">DefinitionS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionStringInput">DefinitionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutionsInput">DefinitionSubstitutionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineNameInput">StateMachineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineTypeInput">StateMachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfigurationInput">TracingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionString">DefinitionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutions">DefinitionSubstitutions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineName">StateMachineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineType">StateMachineType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefinitionS3Location`<sup>Required</sup> <a name="DefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3Location"></a>

```csharp
public StepfunctionsStateMachineDefinitionS3LocationOutputReference DefinitionS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference">StepfunctionsStateMachineDefinitionS3LocationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfiguration"></a>

```csharp
public StepfunctionsStateMachineLoggingConfigurationOutputReference LoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference">StepfunctionsStateMachineLoggingConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tags"></a>

```csharp
public StepfunctionsStateMachineTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList">StepfunctionsStateMachineTagsList</a>

---

##### `TracingConfiguration`<sup>Required</sup> <a name="TracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfiguration"></a>

```csharp
public StepfunctionsStateMachineTracingConfigurationOutputReference TracingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference">StepfunctionsStateMachineTracingConfigurationOutputReference</a>

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `DefinitionS3LocationInput`<sup>Optional</sup> <a name="DefinitionS3LocationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3LocationInput"></a>

```csharp
public IResolvable|StepfunctionsStateMachineDefinitionS3Location DefinitionS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---

##### `DefinitionStringInput`<sup>Optional</sup> <a name="DefinitionStringInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionStringInput"></a>

```csharp
public string DefinitionStringInput { get; }
```

- *Type:* string

---

##### `DefinitionSubstitutionsInput`<sup>Optional</sup> <a name="DefinitionSubstitutionsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinitionSubstitutionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfigurationInput"></a>

```csharp
public IResolvable|StepfunctionsStateMachineLoggingConfiguration LoggingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StateMachineNameInput`<sup>Optional</sup> <a name="StateMachineNameInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineNameInput"></a>

```csharp
public string StateMachineNameInput { get; }
```

- *Type:* string

---

##### `StateMachineTypeInput`<sup>Optional</sup> <a name="StateMachineTypeInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineTypeInput"></a>

```csharp
public string StateMachineTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tagsInput"></a>

```csharp
public IResolvable|StepfunctionsStateMachineTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]

---

##### `TracingConfigurationInput`<sup>Optional</sup> <a name="TracingConfigurationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfigurationInput"></a>

```csharp
public IResolvable|StepfunctionsStateMachineTracingConfiguration TracingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `DefinitionString`<sup>Required</sup> <a name="DefinitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionString"></a>

```csharp
public string DefinitionString { get; }
```

- *Type:* string

---

##### `DefinitionSubstitutions`<sup>Required</sup> <a name="DefinitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinitionSubstitutions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StateMachineName`<sup>Required</sup> <a name="StateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineName"></a>

```csharp
public string StateMachineName { get; }
```

- *Type:* string

---

##### `StateMachineType`<sup>Required</sup> <a name="StateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineType"></a>

```csharp
public string StateMachineType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineConfig <a name="StepfunctionsStateMachineConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RoleArn,
    string Definition = null,
    StepfunctionsStateMachineDefinitionS3Location DefinitionS3Location = null,
    string DefinitionString = null,
    System.Collections.Generic.IDictionary<string, string> DefinitionSubstitutions = null,
    StepfunctionsStateMachineLoggingConfiguration LoggingConfiguration = null,
    string StateMachineName = null,
    string StateMachineType = null,
    IResolvable|StepfunctionsStateMachineTags[] Tags = null,
    StepfunctionsStateMachineTracingConfiguration TracingConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definition">Definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionS3Location">DefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionString">DefinitionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionSubstitutions">DefinitionSubstitutions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineName">StateMachineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineType">StateMachineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tracingConfiguration">TracingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}.

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}.

---

##### `DefinitionS3Location`<sup>Optional</sup> <a name="DefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionS3Location"></a>

```csharp
public StepfunctionsStateMachineDefinitionS3Location DefinitionS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}.

---

##### `DefinitionString`<sup>Optional</sup> <a name="DefinitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionString"></a>

```csharp
public string DefinitionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}.

---

##### `DefinitionSubstitutions`<sup>Optional</sup> <a name="DefinitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionSubstitutions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinitionSubstitutions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}.

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.loggingConfiguration"></a>

```csharp
public StepfunctionsStateMachineLoggingConfiguration LoggingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}.

---

##### `StateMachineName`<sup>Optional</sup> <a name="StateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineName"></a>

```csharp
public string StateMachineName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}.

---

##### `StateMachineType`<sup>Optional</sup> <a name="StateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineType"></a>

```csharp
public string StateMachineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tags"></a>

```csharp
public IResolvable|StepfunctionsStateMachineTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}.

---

##### `TracingConfiguration`<sup>Optional</sup> <a name="TracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tracingConfiguration"></a>

```csharp
public StepfunctionsStateMachineTracingConfiguration TracingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}.

---

### StepfunctionsStateMachineDefinitionS3Location <a name="StepfunctionsStateMachineDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineDefinitionS3Location {
    string Bucket = null,
    string Key = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#bucket StepfunctionsStateMachine#bucket}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#version StepfunctionsStateMachine#version}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#bucket StepfunctionsStateMachine#bucket}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#version StepfunctionsStateMachine#version}.

---

### StepfunctionsStateMachineLoggingConfiguration <a name="StepfunctionsStateMachineLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineLoggingConfiguration {
    IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinations[] Destinations = null,
    bool|IResolvable IncludeExecutionData = null,
    string Level = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#destinations StepfunctionsStateMachine#destinations}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.includeExecutionData">IncludeExecutionData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#include_execution_data StepfunctionsStateMachine#include_execution_data}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#level StepfunctionsStateMachine#level}. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.destinations"></a>

```csharp
public IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#destinations StepfunctionsStateMachine#destinations}.

---

##### `IncludeExecutionData`<sup>Optional</sup> <a name="IncludeExecutionData" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.includeExecutionData"></a>

```csharp
public bool|IResolvable IncludeExecutionData { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#include_execution_data StepfunctionsStateMachine#include_execution_data}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#level StepfunctionsStateMachine#level}.

---

### StepfunctionsStateMachineLoggingConfigurationDestinations <a name="StepfunctionsStateMachineLoggingConfigurationDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineLoggingConfigurationDestinations {
    StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup CloudwatchLogsLogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.property.cloudwatchLogsLogGroup">CloudwatchLogsLogGroup</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}. |

---

##### `CloudwatchLogsLogGroup`<sup>Optional</sup> <a name="CloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.property.cloudwatchLogsLogGroup"></a>

```csharp
public StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup CloudwatchLogsLogGroup { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}.

---

### StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup {
    string LogGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#log_group_arn StepfunctionsStateMachine#log_group_arn}. |

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#log_group_arn StepfunctionsStateMachine#log_group_arn}.

---

### StepfunctionsStateMachineTags <a name="StepfunctionsStateMachineTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#value StepfunctionsStateMachine#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#value StepfunctionsStateMachine#value}.

---

### StepfunctionsStateMachineTracingConfiguration <a name="StepfunctionsStateMachineTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineTracingConfiguration {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#enabled StepfunctionsStateMachine#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine#enabled StepfunctionsStateMachine#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### StepfunctionsStateMachineDefinitionS3LocationOutputReference <a name="StepfunctionsStateMachineDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineDefinitionS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineDefinitionS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsList <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineLoggingConfigurationDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get"></a>

```csharp
private StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup">PutCloudwatchLogsLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogsLogGroup">ResetCloudwatchLogsLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogsLogGroup` <a name="PutCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup"></a>

```csharp
private void PutCloudwatchLogsLogGroup(StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---

##### `ResetCloudwatchLogsLogGroup` <a name="ResetCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogsLogGroup"></a>

```csharp
private void ResetCloudwatchLogsLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup">CloudwatchLogsLogGroup</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroupInput">CloudwatchLogsLogGroupInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsLogGroup`<sup>Required</sup> <a name="CloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup"></a>

```csharp
public StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference CloudwatchLogsLogGroup { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a>

---

##### `CloudwatchLogsLogGroupInput`<sup>Optional</sup> <a name="CloudwatchLogsLogGroupInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroupInput"></a>

```csharp
public IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup CloudwatchLogsLogGroupInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>

---


### StepfunctionsStateMachineLoggingConfigurationOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData">ResetIncludeExecutionData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetIncludeExecutionData` <a name="ResetIncludeExecutionData" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData"></a>

```csharp
private void ResetIncludeExecutionData()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList">StepfunctionsStateMachineLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput">IncludeExecutionDataInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData">IncludeExecutionData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations"></a>

```csharp
public StepfunctionsStateMachineLoggingConfigurationDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList">StepfunctionsStateMachineLoggingConfigurationDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]

---

##### `IncludeExecutionDataInput`<sup>Optional</sup> <a name="IncludeExecutionDataInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput"></a>

```csharp
public bool|IResolvable IncludeExecutionDataInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `IncludeExecutionData`<sup>Required</sup> <a name="IncludeExecutionData" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData"></a>

```csharp
public bool|IResolvable IncludeExecutionData { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineLoggingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---


### StepfunctionsStateMachineTagsList <a name="StepfunctionsStateMachineTagsList" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get"></a>

```csharp
private StepfunctionsStateMachineTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]

---


### StepfunctionsStateMachineTagsOutputReference <a name="StepfunctionsStateMachineTagsOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>

---


### StepfunctionsStateMachineTracingConfigurationOutputReference <a name="StepfunctionsStateMachineTracingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineTracingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineTracingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---



