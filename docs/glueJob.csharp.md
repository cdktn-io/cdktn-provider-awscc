# `glueJob` Submodule <a name="`glueJob` Submodule" id="@cdktn/provider-awscc.glueJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueJob <a name="GlueJob" id="@cdktn/provider-awscc.glueJob.GlueJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job awscc_glue_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJob(Construct Scope, string Id, GlueJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig">GlueJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig">GlueJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putCommand">PutCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty">PutExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty">PutNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity">ResetAllocatedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetConnections">ResetConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments">ResetDefaultArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass">ResetExecutionClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty">ResetExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode">ResetJobMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled">ResetJobRunQueuingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri">ResetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments">ResetNonOverridableArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty">ResetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueJob.GlueJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueJob.GlueJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueJob.GlueJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCommand` <a name="PutCommand" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand"></a>

```csharp
private void PutCommand(GlueJobCommand Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `PutConnections` <a name="PutConnections" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections"></a>

```csharp
private void PutConnections(GlueJobConnections Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---

##### `PutExecutionProperty` <a name="PutExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty"></a>

```csharp
private void PutExecutionProperty(GlueJobExecutionProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `PutNotificationProperty` <a name="PutNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty"></a>

```csharp
private void PutNotificationProperty(GlueJobNotificationProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `ResetAllocatedCapacity` <a name="ResetAllocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity"></a>

```csharp
private void ResetAllocatedCapacity()
```

##### `ResetConnections` <a name="ResetConnections" id="@cdktn/provider-awscc.glueJob.GlueJob.resetConnections"></a>

```csharp
private void ResetConnections()
```

##### `ResetDefaultArguments` <a name="ResetDefaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments"></a>

```csharp
private void ResetDefaultArguments()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExecutionClass` <a name="ResetExecutionClass" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass"></a>

```csharp
private void ResetExecutionClass()
```

##### `ResetExecutionProperty` <a name="ResetExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty"></a>

```csharp
private void ResetExecutionProperty()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion"></a>

```csharp
private void ResetGlueVersion()
```

##### `ResetJobMode` <a name="ResetJobMode" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode"></a>

```csharp
private void ResetJobMode()
```

##### `ResetJobRunQueuingEnabled` <a name="ResetJobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled"></a>

```csharp
private void ResetJobRunQueuingEnabled()
```

##### `ResetLogUri` <a name="ResetLogUri" id="@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri"></a>

```csharp
private void ResetLogUri()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueJob.GlueJob.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNonOverridableArguments` <a name="ResetNonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments"></a>

```csharp
private void ResetNonOverridableArguments()
```

##### `ResetNotificationProperty` <a name="ResetNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty"></a>

```csharp
private void ResetNotificationProperty()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers"></a>

```csharp
private void ResetNumberOfWorkers()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration"></a>

```csharp
private void ResetSecurityConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType"></a>

```csharp
private void ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.command">Command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connections">Connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty">ExecutionProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput">AllocatedCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput">CommandInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput">ConnectionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput">DefaultArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput">ExecutionClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput">ExecutionPropertyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput">GlueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput">JobModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput">JobRunQueuingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput">LogUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput">NonOverridableArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput">NotificationPropertyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput">WorkerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity">AllocatedCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments">DefaultArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass">ExecutionClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion">GlueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode">JobMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled">JobRunQueuingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUri">LogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments">NonOverridableArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tags">Tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerType">WorkerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueJob.GlueJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueJob.GlueJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueJob.GlueJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.glueJob.GlueJob.property.command"></a>

```csharp
public GlueJobCommandOutputReference Command { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a>

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connections"></a>

```csharp
public GlueJobConnectionsOutputReference Connections { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a>

---

##### `ExecutionProperty`<sup>Required</sup> <a name="ExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty"></a>

```csharp
public GlueJobExecutionPropertyOutputReference ExecutionProperty { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueJob.GlueJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationProperty`<sup>Required</sup> <a name="NotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty"></a>

```csharp
public GlueJobNotificationPropertyOutputReference NotificationProperty { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a>

---

##### `AllocatedCapacityInput`<sup>Optional</sup> <a name="AllocatedCapacityInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput"></a>

```csharp
public double AllocatedCapacityInput { get; }
```

- *Type:* double

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput"></a>

```csharp
public IResolvable|GlueJobCommand CommandInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput"></a>

```csharp
public IResolvable|GlueJobConnections ConnectionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---

##### `DefaultArgumentsInput`<sup>Optional</sup> <a name="DefaultArgumentsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput"></a>

```csharp
public string DefaultArgumentsInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExecutionClassInput`<sup>Optional</sup> <a name="ExecutionClassInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput"></a>

```csharp
public string ExecutionClassInput { get; }
```

- *Type:* string

---

##### `ExecutionPropertyInput`<sup>Optional</sup> <a name="ExecutionPropertyInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput"></a>

```csharp
public IResolvable|GlueJobExecutionProperty ExecutionPropertyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput"></a>

```csharp
public string GlueVersionInput { get; }
```

- *Type:* string

---

##### `JobModeInput`<sup>Optional</sup> <a name="JobModeInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput"></a>

```csharp
public string JobModeInput { get; }
```

- *Type:* string

---

##### `JobRunQueuingEnabledInput`<sup>Optional</sup> <a name="JobRunQueuingEnabledInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput"></a>

```csharp
public bool|IResolvable JobRunQueuingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogUriInput`<sup>Optional</sup> <a name="LogUriInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput"></a>

```csharp
public string LogUriInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput"></a>

```csharp
public string MaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NonOverridableArgumentsInput`<sup>Optional</sup> <a name="NonOverridableArgumentsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput"></a>

```csharp
public string NonOverridableArgumentsInput { get; }
```

- *Type:* string

---

##### `NotificationPropertyInput`<sup>Optional</sup> <a name="NotificationPropertyInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput"></a>

```csharp
public IResolvable|GlueJobNotificationProperty NotificationPropertyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput"></a>

```csharp
public double NumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput"></a>

```csharp
public string SecurityConfigurationInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput"></a>

```csharp
public string WorkerTypeInput { get; }
```

- *Type:* string

---

##### `AllocatedCapacity`<sup>Required</sup> <a name="AllocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity"></a>

```csharp
public double AllocatedCapacity { get; }
```

- *Type:* double

---

##### `DefaultArguments`<sup>Required</sup> <a name="DefaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments"></a>

```csharp
public string DefaultArguments { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueJob.GlueJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionClass`<sup>Required</sup> <a name="ExecutionClass" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass"></a>

```csharp
public string ExecutionClass { get; }
```

- *Type:* string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion"></a>

```csharp
public string GlueVersion { get; }
```

- *Type:* string

---

##### `JobMode`<sup>Required</sup> <a name="JobMode" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode"></a>

```csharp
public string JobMode { get; }
```

- *Type:* string

---

##### `JobRunQueuingEnabled`<sup>Required</sup> <a name="JobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled"></a>

```csharp
public bool|IResolvable JobRunQueuingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUri"></a>

```csharp
public string LogUri { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueJob.GlueJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NonOverridableArguments`<sup>Required</sup> <a name="NonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments"></a>

```csharp
public string NonOverridableArguments { get; }
```

- *Type:* string

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; }
```

- *Type:* double

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueJob.GlueJob.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerType"></a>

```csharp
public string WorkerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueJobCommand <a name="GlueJobCommand" id="@cdktn/provider-awscc.glueJob.GlueJobCommand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJobCommand {
    string Name = null,
    string PythonVersion = null,
    string Runtime = null,
    string ScriptLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name">Name</a></code> | <code>string</code> | The name of the job command. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion">PythonVersion</a></code> | <code>string</code> | The Python version being used to execute a Python shell job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime">Runtime</a></code> | <code>string</code> | Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation">ScriptLocation</a></code> | <code>string</code> | Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the job command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#name GlueJob#name}

---

##### `PythonVersion`<sup>Optional</sup> <a name="PythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion"></a>

```csharp
public string PythonVersion { get; set; }
```

- *Type:* string

The Python version being used to execute a Python shell job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#python_version GlueJob#python_version}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#runtime GlueJob#runtime}

---

##### `ScriptLocation`<sup>Optional</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation"></a>

```csharp
public string ScriptLocation { get; set; }
```

- *Type:* string

Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#script_location GlueJob#script_location}

---

### GlueJobConfig <a name="GlueJobConfig" id="@cdktn/provider-awscc.glueJob.GlueJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GlueJobCommand Command,
    string Role,
    double AllocatedCapacity = null,
    GlueJobConnections Connections = null,
    string DefaultArguments = null,
    string Description = null,
    string ExecutionClass = null,
    GlueJobExecutionProperty ExecutionProperty = null,
    string GlueVersion = null,
    string JobMode = null,
    bool|IResolvable JobRunQueuingEnabled = null,
    string LogUri = null,
    string MaintenanceWindow = null,
    double MaxCapacity = null,
    double MaxRetries = null,
    string Name = null,
    string NonOverridableArguments = null,
    GlueJobNotificationProperty NotificationProperty = null,
    double NumberOfWorkers = null,
    string SecurityConfiguration = null,
    string Tags = null,
    double Timeout = null,
    string WorkerType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command">Command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | The code that executes a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role">Role</a></code> | <code>string</code> | The name or Amazon Resource Name (ARN) of the IAM role associated with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity">AllocatedCapacity</a></code> | <code>double</code> | The number of capacity units that are allocated to this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections">Connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | Specifies the connections used by a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments">DefaultArguments</a></code> | <code>string</code> | The default arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description">Description</a></code> | <code>string</code> | A description of the job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass">ExecutionClass</a></code> | <code>string</code> | Indicates whether the job is run with a standard or flexible execution class. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty">ExecutionProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | The maximum number of concurrent runs that are allowed for this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion">GlueVersion</a></code> | <code>string</code> | Glue version determines the versions of Apache Spark and Python that AWS Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode">JobMode</a></code> | <code>string</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled">JobRunQueuingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri">LogUri</a></code> | <code>string</code> | This field is reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | The maximum number of times to retry this job after a JobRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name">Name</a></code> | <code>string</code> | The name you assign to the job definition. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments">NonOverridableArguments</a></code> | <code>string</code> | Non-overridable arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | Specifies configuration properties of a notification. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | The number of workers of a defined workerType that are allocated when a job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | The name of the SecurityConfiguration structure to be used with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags">Tags</a></code> | <code>string</code> | The tags to use with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout">Timeout</a></code> | <code>double</code> | The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType">WorkerType</a></code> | <code>string</code> | TThe type of predefined worker that is allocated when a job runs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command"></a>

```csharp
public GlueJobCommand Command { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

The code that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#command GlueJob#command}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The name or Amazon Resource Name (ARN) of the IAM role associated with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#role GlueJob#role}

---

##### `AllocatedCapacity`<sup>Optional</sup> <a name="AllocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity"></a>

```csharp
public double AllocatedCapacity { get; set; }
```

- *Type:* double

The number of capacity units that are allocated to this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#allocated_capacity GlueJob#allocated_capacity}

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections"></a>

```csharp
public GlueJobConnections Connections { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

Specifies the connections used by a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#connections GlueJob#connections}

---

##### `DefaultArguments`<sup>Optional</sup> <a name="DefaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments"></a>

```csharp
public string DefaultArguments { get; set; }
```

- *Type:* string

The default arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#description GlueJob#description}

---

##### `ExecutionClass`<sup>Optional</sup> <a name="ExecutionClass" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass"></a>

```csharp
public string ExecutionClass { get; set; }
```

- *Type:* string

Indicates whether the job is run with a standard or flexible execution class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#execution_class GlueJob#execution_class}

---

##### `ExecutionProperty`<sup>Optional</sup> <a name="ExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty"></a>

```csharp
public GlueJobExecutionProperty ExecutionProperty { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

The maximum number of concurrent runs that are allowed for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#execution_property GlueJob#execution_property}

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion"></a>

```csharp
public string GlueVersion { get; set; }
```

- *Type:* string

Glue version determines the versions of Apache Spark and Python that AWS Glue supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#glue_version GlueJob#glue_version}

---

##### `JobMode`<sup>Optional</sup> <a name="JobMode" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode"></a>

```csharp
public string JobMode { get; set; }
```

- *Type:* string

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#job_mode GlueJob#job_mode}

---

##### `JobRunQueuingEnabled`<sup>Optional</sup> <a name="JobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled"></a>

```csharp
public bool|IResolvable JobRunQueuingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}

---

##### `LogUri`<sup>Optional</sup> <a name="LogUri" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri"></a>

```csharp
public string LogUri { get; set; }
```

- *Type:* string

This field is reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#log_uri GlueJob#log_uri}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; set; }
```

- *Type:* string

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

The maximum number of times to retry this job after a JobRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#max_retries GlueJob#max_retries}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name you assign to the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#name GlueJob#name}

---

##### `NonOverridableArguments`<sup>Optional</sup> <a name="NonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments"></a>

```csharp
public string NonOverridableArguments { get; set; }
```

- *Type:* string

Non-overridable arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}

---

##### `NotificationProperty`<sup>Optional</sup> <a name="NotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty"></a>

```csharp
public GlueJobNotificationProperty NotificationProperty { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

Specifies configuration properties of a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#notification_property GlueJob#notification_property}

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; set; }
```

- *Type:* double

The number of workers of a defined workerType that are allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; set; }
```

- *Type:* string

The name of the SecurityConfiguration structure to be used with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

The tags to use with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#tags GlueJob#tags}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#timeout GlueJob#timeout}

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType"></a>

```csharp
public string WorkerType { get; set; }
```

- *Type:* string

TThe type of predefined worker that is allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#worker_type GlueJob#worker_type}

---

### GlueJobConnections <a name="GlueJobConnections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJobConnections {
    string[] Connections = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections">Connections</a></code> | <code>string[]</code> | A list of connections used by the job. |

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections"></a>

```csharp
public string[] Connections { get; set; }
```

- *Type:* string[]

A list of connections used by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#connections GlueJob#connections}

---

### GlueJobExecutionProperty <a name="GlueJobExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJobExecutionProperty {
    double MaxConcurrentRuns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>double</code> | The maximum number of concurrent runs allowed for the job. |

---

##### `MaxConcurrentRuns`<sup>Optional</sup> <a name="MaxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns"></a>

```csharp
public double MaxConcurrentRuns { get; set; }
```

- *Type:* double

The maximum number of concurrent runs allowed for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}

---

### GlueJobNotificationProperty <a name="GlueJobNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJobNotificationProperty {
    double NotifyDelayAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>double</code> | It is the number of minutes to wait before sending a job run delay notification after a job run starts. |

---

##### `NotifyDelayAfter`<sup>Optional</sup> <a name="NotifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter"></a>

```csharp
public double NotifyDelayAfter { get; set; }
```

- *Type:* double

It is the number of minutes to wait before sending a job run delay notification after a job run starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueJobCommandOutputReference <a name="GlueJobCommandOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJobCommandOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion">ResetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation">ResetScriptLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPythonVersion` <a name="ResetPythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion"></a>

```csharp
private void ResetPythonVersion()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetScriptLocation` <a name="ResetScriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation"></a>

```csharp
private void ResetScriptLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput">PythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput">ScriptLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PythonVersionInput`<sup>Optional</sup> <a name="PythonVersionInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput"></a>

```csharp
public string PythonVersionInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `ScriptLocationInput`<sup>Optional</sup> <a name="ScriptLocationInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput"></a>

```csharp
public string ScriptLocationInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion"></a>

```csharp
public string PythonVersion { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation"></a>

```csharp
public string ScriptLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueJobCommand InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---


### GlueJobConnectionsOutputReference <a name="GlueJobConnectionsOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJobConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections">ResetConnections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnections` <a name="ResetConnections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections"></a>

```csharp
private void ResetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput">ConnectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections">Connections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput"></a>

```csharp
public string[] ConnectionsInput { get; }
```

- *Type:* string[]

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections"></a>

```csharp
public string[] Connections { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueJobConnections InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---


### GlueJobExecutionPropertyOutputReference <a name="GlueJobExecutionPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJobExecutionPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns">ResetMaxConcurrentRuns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentRuns` <a name="ResetMaxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns"></a>

```csharp
private void ResetMaxConcurrentRuns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput">MaxConcurrentRunsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrentRunsInput`<sup>Optional</sup> <a name="MaxConcurrentRunsInput" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput"></a>

```csharp
public double MaxConcurrentRunsInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentRuns`<sup>Required</sup> <a name="MaxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns"></a>

```csharp
public double MaxConcurrentRuns { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueJobExecutionProperty InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---


### GlueJobNotificationPropertyOutputReference <a name="GlueJobNotificationPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueJobNotificationPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter">ResetNotifyDelayAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotifyDelayAfter` <a name="ResetNotifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```csharp
private void ResetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput">NotifyDelayAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotifyDelayAfterInput`<sup>Optional</sup> <a name="NotifyDelayAfterInput" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```csharp
public double NotifyDelayAfterInput { get; }
```

- *Type:* double

---

##### `NotifyDelayAfter`<sup>Required</sup> <a name="NotifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```csharp
public double NotifyDelayAfter { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueJobNotificationProperty InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---



