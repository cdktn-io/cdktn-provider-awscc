# `stepfunctionsStateMachineAlias` Submodule <a name="`stepfunctionsStateMachineAlias` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachineAlias <a name="StepfunctionsStateMachineAlias" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineAlias(Construct Scope, string Id, StepfunctionsStateMachineAliasConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig">StepfunctionsStateMachineAliasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig">StepfunctionsStateMachineAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference">PutDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration">PutRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDeploymentPreference">ResetDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetRoutingConfiguration">ResetRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetStateMachineArn">ResetStateMachineArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentPreference` <a name="PutDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference"></a>

```csharp
private void PutDeploymentPreference(StepfunctionsStateMachineAliasDeploymentPreference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---

##### `PutRoutingConfiguration` <a name="PutRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration"></a>

```csharp
private void PutRoutingConfiguration(IResolvable|StepfunctionsStateMachineAliasRoutingConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]

---

##### `ResetDeploymentPreference` <a name="ResetDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDeploymentPreference"></a>

```csharp
private void ResetDeploymentPreference()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRoutingConfiguration` <a name="ResetRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetRoutingConfiguration"></a>

```csharp
private void ResetRoutingConfiguration()
```

##### `ResetStateMachineArn` <a name="ResetStateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetStateMachineArn"></a>

```csharp
private void ResetStateMachineArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StepfunctionsStateMachineAlias.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StepfunctionsStateMachineAlias.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StepfunctionsStateMachineAlias.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StepfunctionsStateMachineAlias.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StepfunctionsStateMachineAlias to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StepfunctionsStateMachineAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachineAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreference">DeploymentPreference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfiguration">RoutingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList">StepfunctionsStateMachineAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreferenceInput">DeploymentPreferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfigurationInput">RoutingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArnInput">StateMachineArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArn">StateMachineArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeploymentPreference`<sup>Required</sup> <a name="DeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreference"></a>

```csharp
public StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference DeploymentPreference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoutingConfiguration`<sup>Required</sup> <a name="RoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfiguration"></a>

```csharp
public StepfunctionsStateMachineAliasRoutingConfigurationList RoutingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList">StepfunctionsStateMachineAliasRoutingConfigurationList</a>

---

##### `DeploymentPreferenceInput`<sup>Optional</sup> <a name="DeploymentPreferenceInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreferenceInput"></a>

```csharp
public IResolvable|StepfunctionsStateMachineAliasDeploymentPreference DeploymentPreferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoutingConfigurationInput`<sup>Optional</sup> <a name="RoutingConfigurationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfigurationInput"></a>

```csharp
public IResolvable|StepfunctionsStateMachineAliasRoutingConfiguration[] RoutingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]

---

##### `StateMachineArnInput`<sup>Optional</sup> <a name="StateMachineArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArnInput"></a>

```csharp
public string StateMachineArnInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StateMachineArn`<sup>Required</sup> <a name="StateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArn"></a>

```csharp
public string StateMachineArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineAliasConfig <a name="StepfunctionsStateMachineAliasConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineAliasConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    StepfunctionsStateMachineAliasDeploymentPreference DeploymentPreference = null,
    string Description = null,
    string Name = null,
    IResolvable|StepfunctionsStateMachineAliasRoutingConfiguration[] RoutingConfiguration = null,
    string StateMachineArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.deploymentPreference">DeploymentPreference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | The settings to enable gradual state machine deployments. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.description">Description</a></code> | <code>string</code> | An optional description of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.name">Name</a></code> | <code>string</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.routingConfiguration">RoutingConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]</code> | The routing configuration of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.stateMachineArn">StateMachineArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeploymentPreference`<sup>Optional</sup> <a name="DeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.deploymentPreference"></a>

```csharp
public StepfunctionsStateMachineAliasDeploymentPreference DeploymentPreference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

The settings to enable gradual state machine deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#deployment_preference StepfunctionsStateMachineAlias#deployment_preference}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#description StepfunctionsStateMachineAlias#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#name StepfunctionsStateMachineAlias#name}

---

##### `RoutingConfiguration`<sup>Optional</sup> <a name="RoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.routingConfiguration"></a>

```csharp
public IResolvable|StepfunctionsStateMachineAliasRoutingConfiguration[] RoutingConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]

The routing configuration of the alias.

One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#routing_configuration StepfunctionsStateMachineAlias#routing_configuration}

---

##### `StateMachineArn`<sup>Optional</sup> <a name="StateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.stateMachineArn"></a>

```csharp
public string StateMachineArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}.

---

### StepfunctionsStateMachineAliasDeploymentPreference <a name="StepfunctionsStateMachineAliasDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineAliasDeploymentPreference {
    string[] Alarms = null,
    double Interval = null,
    double Percentage = null,
    string StateMachineVersionArn = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.alarms">Alarms</a></code> | <code>string[]</code> | A list of CloudWatch alarm names that will be monitored during the deployment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.interval">Interval</a></code> | <code>double</code> | The time in minutes between each traffic shifting increment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.percentage">Percentage</a></code> | <code>double</code> | The percentage of traffic to shift to the new version in each increment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.stateMachineVersionArn">StateMachineVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.type">Type</a></code> | <code>string</code> | The type of deployment to perform. |

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.alarms"></a>

```csharp
public string[] Alarms { get; set; }
```

- *Type:* string[]

A list of CloudWatch alarm names that will be monitored during the deployment.

The deployment will fail and rollback if any alarms go into ALARM state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#alarms StepfunctionsStateMachineAlias#alarms}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

The time in minutes between each traffic shifting increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#interval StepfunctionsStateMachineAlias#interval}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

The percentage of traffic to shift to the new version in each increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#percentage StepfunctionsStateMachineAlias#percentage}

---

##### `StateMachineVersionArn`<sup>Optional</sup> <a name="StateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.stateMachineVersionArn"></a>

```csharp
public string StateMachineVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of deployment to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#type StepfunctionsStateMachineAlias#type}

---

### StepfunctionsStateMachineAliasRoutingConfiguration <a name="StepfunctionsStateMachineAliasRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineAliasRoutingConfiguration {
    string StateMachineVersionArn = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.stateMachineVersionArn">StateMachineVersionArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.weight">Weight</a></code> | <code>double</code> | The percentage of traffic you want to route to the state machine version. |

---

##### `StateMachineVersionArn`<sup>Optional</sup> <a name="StateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.stateMachineVersionArn"></a>

```csharp
public string StateMachineVersionArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The percentage of traffic you want to route to the state machine version.

The sum of the weights in the routing configuration must be equal to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/stepfunctions_state_machine_alias#weight StepfunctionsStateMachineAlias#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference <a name="StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetStateMachineVersionArn">ResetStateMachineVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetAlarms"></a>

```csharp
private void ResetAlarms()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```

##### `ResetStateMachineVersionArn` <a name="ResetStateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetStateMachineVersionArn"></a>

```csharp
private void ResetStateMachineVersionArn()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarmsInput">AlarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArnInput">StateMachineVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms">Alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn">StateMachineVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarmsInput"></a>

```csharp
public string[] AlarmsInput { get; }
```

- *Type:* string[]

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `StateMachineVersionArnInput`<sup>Optional</sup> <a name="StateMachineVersionArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArnInput"></a>

```csharp
public string StateMachineVersionArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms"></a>

```csharp
public string[] Alarms { get; }
```

- *Type:* string[]

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `StateMachineVersionArn`<sup>Required</sup> <a name="StateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn"></a>

```csharp
public string StateMachineVersionArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineAliasDeploymentPreference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---


### StepfunctionsStateMachineAliasRoutingConfigurationList <a name="StepfunctionsStateMachineAliasRoutingConfigurationList" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineAliasRoutingConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get"></a>

```csharp
private StepfunctionsStateMachineAliasRoutingConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineAliasRoutingConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]

---


### StepfunctionsStateMachineAliasRoutingConfigurationOutputReference <a name="StepfunctionsStateMachineAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StepfunctionsStateMachineAliasRoutingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetStateMachineVersionArn">ResetStateMachineVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStateMachineVersionArn` <a name="ResetStateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetStateMachineVersionArn"></a>

```csharp
private void ResetStateMachineVersionArn()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArnInput">StateMachineVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn">StateMachineVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateMachineVersionArnInput`<sup>Optional</sup> <a name="StateMachineVersionArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArnInput"></a>

```csharp
public string StateMachineVersionArnInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `StateMachineVersionArn`<sup>Required</sup> <a name="StateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn"></a>

```csharp
public string StateMachineVersionArn { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StepfunctionsStateMachineAliasRoutingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>

---



