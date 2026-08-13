# `sagemakerMlflowTrackingServer` Submodule <a name="`sagemakerMlflowTrackingServer` Submodule" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowTrackingServer <a name="SagemakerMlflowTrackingServer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server awscc_sagemaker_mlflow_tracking_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerMlflowTrackingServer(Construct Scope, string Id, SagemakerMlflowTrackingServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig">SagemakerMlflowTrackingServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig">SagemakerMlflowTrackingServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration">ResetAutomaticModelRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion">ResetMlflowVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize">ResetTrackingServerSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart">ResetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerMlflowTrackingServerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]

---

##### `ResetAutomaticModelRegistration` <a name="ResetAutomaticModelRegistration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration"></a>

```csharp
private void ResetAutomaticModelRegistration()
```

##### `ResetMlflowVersion` <a name="ResetMlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion"></a>

```csharp
private void ResetMlflowVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTrackingServerSize` <a name="ResetTrackingServerSize" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize"></a>

```csharp
private void ResetTrackingServerSize()
```

##### `ResetWeeklyMaintenanceWindowStart` <a name="ResetWeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart"></a>

```csharp
private void ResetWeeklyMaintenanceWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerMlflowTrackingServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerMlflowTrackingServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerMlflowTrackingServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerMlflowTrackingServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerMlflowTrackingServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerMlflowTrackingServer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerMlflowTrackingServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerMlflowTrackingServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowTrackingServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList">SagemakerMlflowTrackingServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerArn">TrackingServerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput">ArtifactStoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput">AutomaticModelRegistrationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput">MlflowVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput">TrackingServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput">TrackingServerSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput">WeeklyMaintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri">ArtifactStoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration">AutomaticModelRegistration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion">MlflowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName">TrackingServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize">TrackingServerSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags"></a>

```csharp
public SagemakerMlflowTrackingServerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList">SagemakerMlflowTrackingServerTagsList</a>

---

##### `TrackingServerArn`<sup>Required</sup> <a name="TrackingServerArn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerArn"></a>

```csharp
public string TrackingServerArn { get; }
```

- *Type:* string

---

##### `ArtifactStoreUriInput`<sup>Optional</sup> <a name="ArtifactStoreUriInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput"></a>

```csharp
public string ArtifactStoreUriInput { get; }
```

- *Type:* string

---

##### `AutomaticModelRegistrationInput`<sup>Optional</sup> <a name="AutomaticModelRegistrationInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput"></a>

```csharp
public bool|IResolvable AutomaticModelRegistrationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MlflowVersionInput`<sup>Optional</sup> <a name="MlflowVersionInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput"></a>

```csharp
public string MlflowVersionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerMlflowTrackingServerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]

---

##### `TrackingServerNameInput`<sup>Optional</sup> <a name="TrackingServerNameInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput"></a>

```csharp
public string TrackingServerNameInput { get; }
```

- *Type:* string

---

##### `TrackingServerSizeInput`<sup>Optional</sup> <a name="TrackingServerSizeInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput"></a>

```csharp
public string TrackingServerSizeInput { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStartInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput"></a>

```csharp
public string WeeklyMaintenanceWindowStartInput { get; }
```

- *Type:* string

---

##### `ArtifactStoreUri`<sup>Required</sup> <a name="ArtifactStoreUri" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri"></a>

```csharp
public string ArtifactStoreUri { get; }
```

- *Type:* string

---

##### `AutomaticModelRegistration`<sup>Required</sup> <a name="AutomaticModelRegistration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration"></a>

```csharp
public bool|IResolvable AutomaticModelRegistration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MlflowVersion`<sup>Required</sup> <a name="MlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion"></a>

```csharp
public string MlflowVersion { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TrackingServerName`<sup>Required</sup> <a name="TrackingServerName" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName"></a>

```csharp
public string TrackingServerName { get; }
```

- *Type:* string

---

##### `TrackingServerSize`<sup>Required</sup> <a name="TrackingServerSize" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize"></a>

```csharp
public string TrackingServerSize { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindowStart`<sup>Required</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart"></a>

```csharp
public string WeeklyMaintenanceWindowStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowTrackingServerConfig <a name="SagemakerMlflowTrackingServerConfig" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerMlflowTrackingServerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ArtifactStoreUri,
    string RoleArn,
    string TrackingServerName,
    bool|IResolvable AutomaticModelRegistration = null,
    string MlflowVersion = null,
    IResolvable|SagemakerMlflowTrackingServerTags[] Tags = null,
    string TrackingServerSize = null,
    string WeeklyMaintenanceWindowStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri">ArtifactStoreUri</a></code> | <code>string</code> | The Amazon S3 URI for MLFlow Tracking Server artifacts. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName">TrackingServerName</a></code> | <code>string</code> | The name of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration">AutomaticModelRegistration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag to enable Automatic SageMaker Model Registration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion">MlflowVersion</a></code> | <code>string</code> | The MLFlow Version used on the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize">TrackingServerSize</a></code> | <code>string</code> | The size of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>string</code> | The start of the time window for maintenance of the MLFlow Tracking Server in UTC time. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ArtifactStoreUri`<sup>Required</sup> <a name="ArtifactStoreUri" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri"></a>

```csharp
public string ArtifactStoreUri { get; set; }
```

- *Type:* string

The Amazon S3 URI for MLFlow Tracking Server artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#artifact_store_uri SagemakerMlflowTrackingServer#artifact_store_uri}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#role_arn SagemakerMlflowTrackingServer#role_arn}

---

##### `TrackingServerName`<sup>Required</sup> <a name="TrackingServerName" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName"></a>

```csharp
public string TrackingServerName { get; set; }
```

- *Type:* string

The name of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_name SagemakerMlflowTrackingServer#tracking_server_name}

---

##### `AutomaticModelRegistration`<sup>Optional</sup> <a name="AutomaticModelRegistration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration"></a>

```csharp
public bool|IResolvable AutomaticModelRegistration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag to enable Automatic SageMaker Model Registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#automatic_model_registration SagemakerMlflowTrackingServer#automatic_model_registration}

---

##### `MlflowVersion`<sup>Optional</sup> <a name="MlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion"></a>

```csharp
public string MlflowVersion { get; set; }
```

- *Type:* string

The MLFlow Version used on the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#mlflow_version SagemakerMlflowTrackingServer#mlflow_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerMlflowTrackingServerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tags SagemakerMlflowTrackingServer#tags}

---

##### `TrackingServerSize`<sup>Optional</sup> <a name="TrackingServerSize" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize"></a>

```csharp
public string TrackingServerSize { get; set; }
```

- *Type:* string

The size of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_size SagemakerMlflowTrackingServer#tracking_server_size}

---

##### `WeeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart"></a>

```csharp
public string WeeklyMaintenanceWindowStart { get; set; }
```

- *Type:* string

The start of the time window for maintenance of the MLFlow Tracking Server in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#weekly_maintenance_window_start SagemakerMlflowTrackingServer#weekly_maintenance_window_start}

---

### SagemakerMlflowTrackingServerTags <a name="SagemakerMlflowTrackingServerTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerMlflowTrackingServerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#key SagemakerMlflowTrackingServer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#value SagemakerMlflowTrackingServer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowTrackingServerTagsList <a name="SagemakerMlflowTrackingServerTagsList" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerMlflowTrackingServerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get"></a>

```csharp
private SagemakerMlflowTrackingServerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerMlflowTrackingServerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>[]

---


### SagemakerMlflowTrackingServerTagsOutputReference <a name="SagemakerMlflowTrackingServerTagsOutputReference" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerMlflowTrackingServerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerMlflowTrackingServerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>

---



