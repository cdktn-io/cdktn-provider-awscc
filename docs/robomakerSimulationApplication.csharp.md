# `robomakerSimulationApplication` Submodule <a name="`robomakerSimulationApplication` Submodule" id="@cdktn/provider-awscc.robomakerSimulationApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RobomakerSimulationApplication <a name="RobomakerSimulationApplication" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application awscc_robomaker_simulation_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplication(Construct Scope, string Id, RobomakerSimulationApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig">RobomakerSimulationApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig">RobomakerSimulationApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine">PutRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite">PutRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite">PutSimulationSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetCurrentRevisionId">ResetCurrentRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetRenderingEngine">ResetRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetSources">ResetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRenderingEngine` <a name="PutRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine"></a>

```csharp
private void PutRenderingEngine(RobomakerSimulationApplicationRenderingEngine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---

##### `PutRobotSoftwareSuite` <a name="PutRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite"></a>

```csharp
private void PutRobotSoftwareSuite(RobomakerSimulationApplicationRobotSoftwareSuite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---

##### `PutSimulationSoftwareSuite` <a name="PutSimulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite"></a>

```csharp
private void PutSimulationSoftwareSuite(RobomakerSimulationApplicationSimulationSoftwareSuite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources"></a>

```csharp
private void PutSources(IResolvable|RobomakerSimulationApplicationSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]

---

##### `ResetCurrentRevisionId` <a name="ResetCurrentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetCurrentRevisionId"></a>

```csharp
private void ResetCurrentRevisionId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRenderingEngine` <a name="ResetRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetRenderingEngine"></a>

```csharp
private void ResetRenderingEngine()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetSources"></a>

```csharp
private void ResetSources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RobomakerSimulationApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RobomakerSimulationApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RobomakerSimulationApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RobomakerSimulationApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RobomakerSimulationApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RobomakerSimulationApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RobomakerSimulationApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RobomakerSimulationApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RobomakerSimulationApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngine">RenderingEngine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference">RobomakerSimulationApplicationRenderingEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuite">RobotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuite">SimulationSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList">RobomakerSimulationApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionIdInput">CurrentRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngineInput">RenderingEngineInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuiteInput">RobotSoftwareSuiteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuiteInput">SimulationSoftwareSuiteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sourcesInput">SourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionId">CurrentRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RenderingEngine`<sup>Required</sup> <a name="RenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngine"></a>

```csharp
public RobomakerSimulationApplicationRenderingEngineOutputReference RenderingEngine { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference">RobomakerSimulationApplicationRenderingEngineOutputReference</a>

---

##### `RobotSoftwareSuite`<sup>Required</sup> <a name="RobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuite"></a>

```csharp
public RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference RobotSoftwareSuite { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `SimulationSoftwareSuite`<sup>Required</sup> <a name="SimulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuite"></a>

```csharp
public RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference SimulationSoftwareSuite { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sources"></a>

```csharp
public RobomakerSimulationApplicationSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList">RobomakerSimulationApplicationSourcesList</a>

---

##### `CurrentRevisionIdInput`<sup>Optional</sup> <a name="CurrentRevisionIdInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionIdInput"></a>

```csharp
public string CurrentRevisionIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RenderingEngineInput`<sup>Optional</sup> <a name="RenderingEngineInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngineInput"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationRenderingEngine RenderingEngineInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---

##### `RobotSoftwareSuiteInput`<sup>Optional</sup> <a name="RobotSoftwareSuiteInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuiteInput"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationRobotSoftwareSuite RobotSoftwareSuiteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---

##### `SimulationSoftwareSuiteInput`<sup>Optional</sup> <a name="SimulationSoftwareSuiteInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuiteInput"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationSimulationSoftwareSuite SimulationSoftwareSuiteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sourcesInput"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationSources[] SourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CurrentRevisionId`<sup>Required</sup> <a name="CurrentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionId"></a>

```csharp
public string CurrentRevisionId { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RobomakerSimulationApplicationConfig <a name="RobomakerSimulationApplicationConfig" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    RobomakerSimulationApplicationRobotSoftwareSuite RobotSoftwareSuite,
    RobomakerSimulationApplicationSimulationSoftwareSuite SimulationSoftwareSuite,
    string CurrentRevisionId = null,
    string Environment = null,
    string Name = null,
    RobomakerSimulationApplicationRenderingEngine RenderingEngine = null,
    IResolvable|RobomakerSimulationApplicationSources[] Sources = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.robotSoftwareSuite">RobotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.simulationSoftwareSuite">SimulationSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | The simulation software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.currentRevisionId">CurrentRevisionId</a></code> | <code>string</code> | The current revision id. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.environment">Environment</a></code> | <code>string</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.name">Name</a></code> | <code>string</code> | The name of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.renderingEngine">RenderingEngine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | The rendering engine for the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.sources">Sources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]</code> | The sources of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RobotSoftwareSuite`<sup>Required</sup> <a name="RobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.robotSoftwareSuite"></a>

```csharp
public RobomakerSimulationApplicationRobotSoftwareSuite RobotSoftwareSuite { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

The robot software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#robot_software_suite RobomakerSimulationApplication#robot_software_suite}

---

##### `SimulationSoftwareSuite`<sup>Required</sup> <a name="SimulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.simulationSoftwareSuite"></a>

```csharp
public RobomakerSimulationApplicationSimulationSoftwareSuite SimulationSoftwareSuite { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

The simulation software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#simulation_software_suite RobomakerSimulationApplication#simulation_software_suite}

---

##### `CurrentRevisionId`<sup>Optional</sup> <a name="CurrentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.currentRevisionId"></a>

```csharp
public string CurrentRevisionId { get; set; }
```

- *Type:* string

The current revision id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#current_revision_id RobomakerSimulationApplication#current_revision_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#environment RobomakerSimulationApplication#environment}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `RenderingEngine`<sup>Optional</sup> <a name="RenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.renderingEngine"></a>

```csharp
public RobomakerSimulationApplicationRenderingEngine RenderingEngine { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

The rendering engine for the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#rendering_engine RobomakerSimulationApplication#rendering_engine}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.sources"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationSources[] Sources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]

The sources of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#sources RobomakerSimulationApplication#sources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#tags RobomakerSimulationApplication#tags}

---

### RobomakerSimulationApplicationRenderingEngine <a name="RobomakerSimulationApplicationRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationRenderingEngine {
    string Name = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.name">Name</a></code> | <code>string</code> | The name of the rendering engine. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.version">Version</a></code> | <code>string</code> | The version of the rendering engine. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationRobotSoftwareSuite <a name="RobomakerSimulationApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationRobotSoftwareSuite {
    string Name,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.name">Name</a></code> | <code>string</code> | The name of the robot software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.version">Version</a></code> | <code>string</code> | The version of the robot software suite. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationSimulationSoftwareSuite <a name="RobomakerSimulationApplicationSimulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationSimulationSoftwareSuite {
    string Name,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.name">Name</a></code> | <code>string</code> | The name of the simulation software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.version">Version</a></code> | <code>string</code> | The version of the simulation software suite. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationSources <a name="RobomakerSimulationApplicationSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationSources {
    string Architecture = null,
    string S3Bucket = null,
    string S3Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.architecture">Architecture</a></code> | <code>string</code> | The target processor architecture for the application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | The Amazon S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Key">S3Key</a></code> | <code>string</code> | The s3 object key. |

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.architecture"></a>

```csharp
public string Architecture { get; set; }
```

- *Type:* string

The target processor architecture for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#architecture RobomakerSimulationApplication#architecture}

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

The Amazon S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#s3_bucket RobomakerSimulationApplication#s3_bucket}

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

The s3 object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/robomaker_simulation_application#s3_key RobomakerSimulationApplication#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### RobomakerSimulationApplicationRenderingEngineOutputReference <a name="RobomakerSimulationApplicationRenderingEngineOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationRenderingEngineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationRenderingEngine InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---


### RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference <a name="RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationRobotSoftwareSuite InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---


### RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference <a name="RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationSimulationSoftwareSuite InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---


### RobomakerSimulationApplicationSourcesList <a name="RobomakerSimulationApplicationSourcesList" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get"></a>

```csharp
private RobomakerSimulationApplicationSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.internalValue"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>[]

---


### RobomakerSimulationApplicationSourcesOutputReference <a name="RobomakerSimulationApplicationSourcesOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerSimulationApplicationSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetArchitecture"></a>

```csharp
private void ResetArchitecture()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architectureInput"></a>

```csharp
public string ArchitectureInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RobomakerSimulationApplicationSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>

---



