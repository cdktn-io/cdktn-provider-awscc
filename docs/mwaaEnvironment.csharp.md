# `mwaaEnvironment` Submodule <a name="`mwaaEnvironment` Submodule" id="@cdktn/provider-awscc.mwaaEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwaaEnvironment <a name="MwaaEnvironment" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment awscc_mwaa_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironment(Construct Scope, string Id, MwaaEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig">MwaaEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig">MwaaEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions">ResetAirflowConfigurationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion">ResetAirflowVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetDagS3Path">ResetDagS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetEndpointManagement">ResetEndpointManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass">ResetEnvironmentClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetMaxWebservers">ResetMaxWebservers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetMinWebservers">ResetMinWebservers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetMinWorkers">ResetMinWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion">ResetPluginsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path">ResetPluginsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion">ResetRequirementsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path">ResetRequirementsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetSchedulers">ResetSchedulers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetSourceBucketArn">ResetSourceBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetStartupScriptS3ObjectVersion">ResetStartupScriptS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetStartupScriptS3Path">ResetStartupScriptS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode">ResetWebserverAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart">ResetWeeklyMaintenanceWindowStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetWorkerReplacementStrategy">ResetWorkerReplacementStrategy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration"></a>

```csharp
private void PutLoggingConfiguration(MwaaEnvironmentLoggingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(MwaaEnvironmentNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---

##### `ResetAirflowConfigurationOptions` <a name="ResetAirflowConfigurationOptions" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions"></a>

```csharp
private void ResetAirflowConfigurationOptions()
```

##### `ResetAirflowVersion` <a name="ResetAirflowVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion"></a>

```csharp
private void ResetAirflowVersion()
```

##### `ResetDagS3Path` <a name="ResetDagS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetDagS3Path"></a>

```csharp
private void ResetDagS3Path()
```

##### `ResetEndpointManagement` <a name="ResetEndpointManagement" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetEndpointManagement"></a>

```csharp
private void ResetEndpointManagement()
```

##### `ResetEnvironmentClass` <a name="ResetEnvironmentClass" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass"></a>

```csharp
private void ResetEnvironmentClass()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration"></a>

```csharp
private void ResetLoggingConfiguration()
```

##### `ResetMaxWebservers` <a name="ResetMaxWebservers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetMaxWebservers"></a>

```csharp
private void ResetMaxWebservers()
```

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers"></a>

```csharp
private void ResetMaxWorkers()
```

##### `ResetMinWebservers` <a name="ResetMinWebservers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetMinWebservers"></a>

```csharp
private void ResetMinWebservers()
```

##### `ResetMinWorkers` <a name="ResetMinWorkers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetMinWorkers"></a>

```csharp
private void ResetMinWorkers()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetPluginsS3ObjectVersion` <a name="ResetPluginsS3ObjectVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion"></a>

```csharp
private void ResetPluginsS3ObjectVersion()
```

##### `ResetPluginsS3Path` <a name="ResetPluginsS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path"></a>

```csharp
private void ResetPluginsS3Path()
```

##### `ResetRequirementsS3ObjectVersion` <a name="ResetRequirementsS3ObjectVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion"></a>

```csharp
private void ResetRequirementsS3ObjectVersion()
```

##### `ResetRequirementsS3Path` <a name="ResetRequirementsS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path"></a>

```csharp
private void ResetRequirementsS3Path()
```

##### `ResetSchedulers` <a name="ResetSchedulers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetSchedulers"></a>

```csharp
private void ResetSchedulers()
```

##### `ResetSourceBucketArn` <a name="ResetSourceBucketArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetSourceBucketArn"></a>

```csharp
private void ResetSourceBucketArn()
```

##### `ResetStartupScriptS3ObjectVersion` <a name="ResetStartupScriptS3ObjectVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetStartupScriptS3ObjectVersion"></a>

```csharp
private void ResetStartupScriptS3ObjectVersion()
```

##### `ResetStartupScriptS3Path` <a name="ResetStartupScriptS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetStartupScriptS3Path"></a>

```csharp
private void ResetStartupScriptS3Path()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWebserverAccessMode` <a name="ResetWebserverAccessMode" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode"></a>

```csharp
private void ResetWebserverAccessMode()
```

##### `ResetWeeklyMaintenanceWindowStart` <a name="ResetWeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart"></a>

```csharp
private void ResetWeeklyMaintenanceWindowStart()
```

##### `ResetWorkerReplacementStrategy` <a name="ResetWorkerReplacementStrategy" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.resetWorkerReplacementStrategy"></a>

```csharp
private void ResetWorkerReplacementStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MwaaEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MwaaEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MwaaEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MwaaEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MwaaEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MwaaEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwaaEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwaaEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MwaaEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.celeryExecutorQueue">CeleryExecutorQueue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.databaseVpcEndpointService">DatabaseVpcEndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.webserverUrl">WebserverUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.webserverVpcEndpointService">WebserverVpcEndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput">AirflowConfigurationOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput">AirflowVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput">DagS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.endpointManagementInput">EndpointManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput">EnvironmentClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.maxWebserversInput">MaxWebserversInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.minWebserversInput">MinWebserversInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput">MinWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput">PluginsS3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput">PluginsS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput">RequirementsS3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput">RequirementsS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.schedulersInput">SchedulersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput">SourceBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.startupScriptS3ObjectVersionInput">StartupScriptS3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.startupScriptS3PathInput">StartupScriptS3PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput">WebserverAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput">WeeklyMaintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.workerReplacementStrategyInput">WorkerReplacementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions">AirflowConfigurationOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.airflowVersion">AirflowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.dagS3Path">DagS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.endpointManagement">EndpointManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.environmentClass">EnvironmentClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.maxWebservers">MaxWebservers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.minWebservers">MinWebservers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.minWorkers">MinWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion">PluginsS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path">PluginsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion">RequirementsS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path">RequirementsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.schedulers">Schedulers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn">SourceBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.startupScriptS3ObjectVersion">StartupScriptS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.startupScriptS3Path">StartupScriptS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.tags">Tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode">WebserverAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.workerReplacementStrategy">WorkerReplacementStrategy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CeleryExecutorQueue`<sup>Required</sup> <a name="CeleryExecutorQueue" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.celeryExecutorQueue"></a>

```csharp
public string CeleryExecutorQueue { get; }
```

- *Type:* string

---

##### `DatabaseVpcEndpointService`<sup>Required</sup> <a name="DatabaseVpcEndpointService" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.databaseVpcEndpointService"></a>

```csharp
public string DatabaseVpcEndpointService { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationOutputReference LoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration"></a>

```csharp
public MwaaEnvironmentNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a>

---

##### `WebserverUrl`<sup>Required</sup> <a name="WebserverUrl" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.webserverUrl"></a>

```csharp
public string WebserverUrl { get; }
```

- *Type:* string

---

##### `WebserverVpcEndpointService`<sup>Required</sup> <a name="WebserverVpcEndpointService" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.webserverVpcEndpointService"></a>

```csharp
public string WebserverVpcEndpointService { get; }
```

- *Type:* string

---

##### `AirflowConfigurationOptionsInput`<sup>Optional</sup> <a name="AirflowConfigurationOptionsInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput"></a>

```csharp
public string AirflowConfigurationOptionsInput { get; }
```

- *Type:* string

---

##### `AirflowVersionInput`<sup>Optional</sup> <a name="AirflowVersionInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput"></a>

```csharp
public string AirflowVersionInput { get; }
```

- *Type:* string

---

##### `DagS3PathInput`<sup>Optional</sup> <a name="DagS3PathInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput"></a>

```csharp
public string DagS3PathInput { get; }
```

- *Type:* string

---

##### `EndpointManagementInput`<sup>Optional</sup> <a name="EndpointManagementInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.endpointManagementInput"></a>

```csharp
public string EndpointManagementInput { get; }
```

- *Type:* string

---

##### `EnvironmentClassInput`<sup>Optional</sup> <a name="EnvironmentClassInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput"></a>

```csharp
public string EnvironmentClassInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfiguration LoggingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---

##### `MaxWebserversInput`<sup>Optional</sup> <a name="MaxWebserversInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.maxWebserversInput"></a>

```csharp
public double MaxWebserversInput { get; }
```

- *Type:* double

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput"></a>

```csharp
public double MaxWorkersInput { get; }
```

- *Type:* double

---

##### `MinWebserversInput`<sup>Optional</sup> <a name="MinWebserversInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.minWebserversInput"></a>

```csharp
public double MinWebserversInput { get; }
```

- *Type:* double

---

##### `MinWorkersInput`<sup>Optional</sup> <a name="MinWorkersInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput"></a>

```csharp
public double MinWorkersInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput"></a>

```csharp
public IResolvable|MwaaEnvironmentNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---

##### `PluginsS3ObjectVersionInput`<sup>Optional</sup> <a name="PluginsS3ObjectVersionInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput"></a>

```csharp
public string PluginsS3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `PluginsS3PathInput`<sup>Optional</sup> <a name="PluginsS3PathInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput"></a>

```csharp
public string PluginsS3PathInput { get; }
```

- *Type:* string

---

##### `RequirementsS3ObjectVersionInput`<sup>Optional</sup> <a name="RequirementsS3ObjectVersionInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput"></a>

```csharp
public string RequirementsS3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `RequirementsS3PathInput`<sup>Optional</sup> <a name="RequirementsS3PathInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput"></a>

```csharp
public string RequirementsS3PathInput { get; }
```

- *Type:* string

---

##### `SchedulersInput`<sup>Optional</sup> <a name="SchedulersInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.schedulersInput"></a>

```csharp
public double SchedulersInput { get; }
```

- *Type:* double

---

##### `SourceBucketArnInput`<sup>Optional</sup> <a name="SourceBucketArnInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput"></a>

```csharp
public string SourceBucketArnInput { get; }
```

- *Type:* string

---

##### `StartupScriptS3ObjectVersionInput`<sup>Optional</sup> <a name="StartupScriptS3ObjectVersionInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.startupScriptS3ObjectVersionInput"></a>

```csharp
public string StartupScriptS3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `StartupScriptS3PathInput`<sup>Optional</sup> <a name="StartupScriptS3PathInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.startupScriptS3PathInput"></a>

```csharp
public string StartupScriptS3PathInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `WebserverAccessModeInput`<sup>Optional</sup> <a name="WebserverAccessModeInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput"></a>

```csharp
public string WebserverAccessModeInput { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStartInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput"></a>

```csharp
public string WeeklyMaintenanceWindowStartInput { get; }
```

- *Type:* string

---

##### `WorkerReplacementStrategyInput`<sup>Optional</sup> <a name="WorkerReplacementStrategyInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.workerReplacementStrategyInput"></a>

```csharp
public string WorkerReplacementStrategyInput { get; }
```

- *Type:* string

---

##### `AirflowConfigurationOptions`<sup>Required</sup> <a name="AirflowConfigurationOptions" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions"></a>

```csharp
public string AirflowConfigurationOptions { get; }
```

- *Type:* string

---

##### `AirflowVersion`<sup>Required</sup> <a name="AirflowVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.airflowVersion"></a>

```csharp
public string AirflowVersion { get; }
```

- *Type:* string

---

##### `DagS3Path`<sup>Required</sup> <a name="DagS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.dagS3Path"></a>

```csharp
public string DagS3Path { get; }
```

- *Type:* string

---

##### `EndpointManagement`<sup>Required</sup> <a name="EndpointManagement" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.endpointManagement"></a>

```csharp
public string EndpointManagement { get; }
```

- *Type:* string

---

##### `EnvironmentClass`<sup>Required</sup> <a name="EnvironmentClass" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.environmentClass"></a>

```csharp
public string EnvironmentClass { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `MaxWebservers`<sup>Required</sup> <a name="MaxWebservers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.maxWebservers"></a>

```csharp
public double MaxWebservers { get; }
```

- *Type:* double

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; }
```

- *Type:* double

---

##### `MinWebservers`<sup>Required</sup> <a name="MinWebservers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.minWebservers"></a>

```csharp
public double MinWebservers { get; }
```

- *Type:* double

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.minWorkers"></a>

```csharp
public double MinWorkers { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PluginsS3ObjectVersion`<sup>Required</sup> <a name="PluginsS3ObjectVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion"></a>

```csharp
public string PluginsS3ObjectVersion { get; }
```

- *Type:* string

---

##### `PluginsS3Path`<sup>Required</sup> <a name="PluginsS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path"></a>

```csharp
public string PluginsS3Path { get; }
```

- *Type:* string

---

##### `RequirementsS3ObjectVersion`<sup>Required</sup> <a name="RequirementsS3ObjectVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion"></a>

```csharp
public string RequirementsS3ObjectVersion { get; }
```

- *Type:* string

---

##### `RequirementsS3Path`<sup>Required</sup> <a name="RequirementsS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path"></a>

```csharp
public string RequirementsS3Path { get; }
```

- *Type:* string

---

##### `Schedulers`<sup>Required</sup> <a name="Schedulers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.schedulers"></a>

```csharp
public double Schedulers { get; }
```

- *Type:* double

---

##### `SourceBucketArn`<sup>Required</sup> <a name="SourceBucketArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn"></a>

```csharp
public string SourceBucketArn { get; }
```

- *Type:* string

---

##### `StartupScriptS3ObjectVersion`<sup>Required</sup> <a name="StartupScriptS3ObjectVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.startupScriptS3ObjectVersion"></a>

```csharp
public string StartupScriptS3ObjectVersion { get; }
```

- *Type:* string

---

##### `StartupScriptS3Path`<sup>Required</sup> <a name="StartupScriptS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.startupScriptS3Path"></a>

```csharp
public string StartupScriptS3Path { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

##### `WebserverAccessMode`<sup>Required</sup> <a name="WebserverAccessMode" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode"></a>

```csharp
public string WebserverAccessMode { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindowStart`<sup>Required</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart"></a>

```csharp
public string WeeklyMaintenanceWindowStart { get; }
```

- *Type:* string

---

##### `WorkerReplacementStrategy`<sup>Required</sup> <a name="WorkerReplacementStrategy" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.workerReplacementStrategy"></a>

```csharp
public string WorkerReplacementStrategy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwaaEnvironmentConfig <a name="MwaaEnvironmentConfig" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AirflowConfigurationOptions = null,
    string AirflowVersion = null,
    string DagS3Path = null,
    string EndpointManagement = null,
    string EnvironmentClass = null,
    string ExecutionRoleArn = null,
    string KmsKey = null,
    MwaaEnvironmentLoggingConfiguration LoggingConfiguration = null,
    double MaxWebservers = null,
    double MaxWorkers = null,
    double MinWebservers = null,
    double MinWorkers = null,
    MwaaEnvironmentNetworkConfiguration NetworkConfiguration = null,
    string PluginsS3ObjectVersion = null,
    string PluginsS3Path = null,
    string RequirementsS3ObjectVersion = null,
    string RequirementsS3Path = null,
    double Schedulers = null,
    string SourceBucketArn = null,
    string StartupScriptS3ObjectVersion = null,
    string StartupScriptS3Path = null,
    string Tags = null,
    string WebserverAccessMode = null,
    string WeeklyMaintenanceWindowStart = null,
    string WorkerReplacementStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Customer-defined identifier for the environment, unique per customer region. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions">AirflowConfigurationOptions</a></code> | <code>string</code> | Key/value pairs representing Airflow configuration variables.     Keys are prefixed by their section:. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion">AirflowVersion</a></code> | <code>string</code> | Version of airflow to deploy to the environment. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path">DagS3Path</a></code> | <code>string</code> | Represents an S3 prefix relative to the root of an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.endpointManagement">EndpointManagement</a></code> | <code>string</code> | Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass">EnvironmentClass</a></code> | <code>string</code> | Templated configuration for airflow processes and backing infrastructure. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | IAM role to be used by tasks. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for MWAA data encryption. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | Logging configuration for the environment. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWebservers">MaxWebservers</a></code> | <code>double</code> | Maximum webserver compute units. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | Maximum worker compute units. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.minWebservers">MinWebservers</a></code> | <code>double</code> | Minimum webserver compute units. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers">MinWorkers</a></code> | <code>double</code> | Minimum worker compute units. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | Configures the network resources of the environment. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion">PluginsS3ObjectVersion</a></code> | <code>string</code> | Represents an version ID for an S3 object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path">PluginsS3Path</a></code> | <code>string</code> | Represents an S3 prefix relative to the root of an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion">RequirementsS3ObjectVersion</a></code> | <code>string</code> | Represents an version ID for an S3 object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path">RequirementsS3Path</a></code> | <code>string</code> | Represents an S3 prefix relative to the root of an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers">Schedulers</a></code> | <code>double</code> | Scheduler compute units. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn">SourceBucketArn</a></code> | <code>string</code> | ARN for the AWS S3 bucket to use as the source of DAGs and plugins for the environment. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.startupScriptS3ObjectVersion">StartupScriptS3ObjectVersion</a></code> | <code>string</code> | Represents an version ID for an S3 object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.startupScriptS3Path">StartupScriptS3Path</a></code> | <code>string</code> | Represents an S3 prefix relative to the root of an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.tags">Tags</a></code> | <code>string</code> | A map of tags for the environment. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode">WebserverAccessMode</a></code> | <code>string</code> | Choice for mode of webserver access including over public internet or via private VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>string</code> | Start time for the weekly maintenance window. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.workerReplacementStrategy">WorkerReplacementStrategy</a></code> | <code>string</code> | The worker replacement strategy to use when updating the environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Customer-defined identifier for the environment, unique per customer region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#name MwaaEnvironment#name}

---

##### `AirflowConfigurationOptions`<sup>Optional</sup> <a name="AirflowConfigurationOptions" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions"></a>

```csharp
public string AirflowConfigurationOptions { get; set; }
```

- *Type:* string

Key/value pairs representing Airflow configuration variables.     Keys are prefixed by their section:.

[core]
dags_folder={AIRFLOW_HOME}/dags

```
Would be represented as

"core.dags_folder": "{AIRFLOW_HOME}/dags"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}

---

##### `AirflowVersion`<sup>Optional</sup> <a name="AirflowVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion"></a>

```csharp
public string AirflowVersion { get; set; }
```

- *Type:* string

Version of airflow to deploy to the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}

---

##### `DagS3Path`<sup>Optional</sup> <a name="DagS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path"></a>

```csharp
public string DagS3Path { get; set; }
```

- *Type:* string

Represents an S3 prefix relative to the root of an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}

---

##### `EndpointManagement`<sup>Optional</sup> <a name="EndpointManagement" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.endpointManagement"></a>

```csharp
public string EndpointManagement { get; set; }
```

- *Type:* string

Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#endpoint_management MwaaEnvironment#endpoint_management}

---

##### `EnvironmentClass`<sup>Optional</sup> <a name="EnvironmentClass" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass"></a>

```csharp
public string EnvironmentClass { get; set; }
```

- *Type:* string

Templated configuration for airflow processes and backing infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#environment_class MwaaEnvironment#environment_class}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

IAM role to be used by tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for MWAA data encryption.

You can specify the CMK using any of the following:

```
Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.

Key alias. For example, alias/ExampleAlias.

Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.

Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.

AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#kms_key MwaaEnvironment#kms_key}

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration"></a>

```csharp
public MwaaEnvironmentLoggingConfiguration LoggingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

Logging configuration for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#logging_configuration MwaaEnvironment#logging_configuration}

---

##### `MaxWebservers`<sup>Optional</sup> <a name="MaxWebservers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWebservers"></a>

```csharp
public double MaxWebservers { get; set; }
```

- *Type:* double

Maximum webserver compute units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#max_webservers MwaaEnvironment#max_webservers}

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; set; }
```

- *Type:* double

Maximum worker compute units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#max_workers MwaaEnvironment#max_workers}

---

##### `MinWebservers`<sup>Optional</sup> <a name="MinWebservers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.minWebservers"></a>

```csharp
public double MinWebservers { get; set; }
```

- *Type:* double

Minimum webserver compute units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#min_webservers MwaaEnvironment#min_webservers}

---

##### `MinWorkers`<sup>Optional</sup> <a name="MinWorkers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers"></a>

```csharp
public double MinWorkers { get; set; }
```

- *Type:* double

Minimum worker compute units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#min_workers MwaaEnvironment#min_workers}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration"></a>

```csharp
public MwaaEnvironmentNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

Configures the network resources of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#network_configuration MwaaEnvironment#network_configuration}

---

##### `PluginsS3ObjectVersion`<sup>Optional</sup> <a name="PluginsS3ObjectVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion"></a>

```csharp
public string PluginsS3ObjectVersion { get; set; }
```

- *Type:* string

Represents an version ID for an S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}

---

##### `PluginsS3Path`<sup>Optional</sup> <a name="PluginsS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path"></a>

```csharp
public string PluginsS3Path { get; set; }
```

- *Type:* string

Represents an S3 prefix relative to the root of an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}

---

##### `RequirementsS3ObjectVersion`<sup>Optional</sup> <a name="RequirementsS3ObjectVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion"></a>

```csharp
public string RequirementsS3ObjectVersion { get; set; }
```

- *Type:* string

Represents an version ID for an S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}

---

##### `RequirementsS3Path`<sup>Optional</sup> <a name="RequirementsS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path"></a>

```csharp
public string RequirementsS3Path { get; set; }
```

- *Type:* string

Represents an S3 prefix relative to the root of an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}

---

##### `Schedulers`<sup>Optional</sup> <a name="Schedulers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers"></a>

```csharp
public double Schedulers { get; set; }
```

- *Type:* double

Scheduler compute units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#schedulers MwaaEnvironment#schedulers}

---

##### `SourceBucketArn`<sup>Optional</sup> <a name="SourceBucketArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn"></a>

```csharp
public string SourceBucketArn { get; set; }
```

- *Type:* string

ARN for the AWS S3 bucket to use as the source of DAGs and plugins for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}

---

##### `StartupScriptS3ObjectVersion`<sup>Optional</sup> <a name="StartupScriptS3ObjectVersion" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.startupScriptS3ObjectVersion"></a>

```csharp
public string StartupScriptS3ObjectVersion { get; set; }
```

- *Type:* string

Represents an version ID for an S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#startup_script_s3_object_version MwaaEnvironment#startup_script_s3_object_version}

---

##### `StartupScriptS3Path`<sup>Optional</sup> <a name="StartupScriptS3Path" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.startupScriptS3Path"></a>

```csharp
public string StartupScriptS3Path { get; set; }
```

- *Type:* string

Represents an S3 prefix relative to the root of an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#startup_script_s3_path MwaaEnvironment#startup_script_s3_path}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

A map of tags for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#tags MwaaEnvironment#tags}

---

##### `WebserverAccessMode`<sup>Optional</sup> <a name="WebserverAccessMode" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode"></a>

```csharp
public string WebserverAccessMode { get; set; }
```

- *Type:* string

Choice for mode of webserver access including over public internet or via private VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}

---

##### `WeeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart"></a>

```csharp
public string WeeklyMaintenanceWindowStart { get; set; }
```

- *Type:* string

Start time for the weekly maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}

---

##### `WorkerReplacementStrategy`<sup>Optional</sup> <a name="WorkerReplacementStrategy" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentConfig.property.workerReplacementStrategy"></a>

```csharp
public string WorkerReplacementStrategy { get; set; }
```

- *Type:* string

The worker replacement strategy to use when updating the environment.

Valid values: `FORCED`, `GRACEFUL`. FORCED means Apache Airflow workers will be stopped and replaced without waiting for tasks to complete before an update. GRACEFUL means Apache Airflow workers will be able to complete running tasks for up to 12 hours during an update before being stopped and replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#worker_replacement_strategy MwaaEnvironment#worker_replacement_strategy}

---

### MwaaEnvironmentLoggingConfiguration <a name="MwaaEnvironmentLoggingConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfiguration {
    MwaaEnvironmentLoggingConfigurationDagProcessingLogs DagProcessingLogs = null,
    MwaaEnvironmentLoggingConfigurationSchedulerLogs SchedulerLogs = null,
    MwaaEnvironmentLoggingConfigurationTaskLogs TaskLogs = null,
    MwaaEnvironmentLoggingConfigurationWebserverLogs WebserverLogs = null,
    MwaaEnvironmentLoggingConfigurationWorkerLogs WorkerLogs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs">DagProcessingLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | Logging configuration for a specific airflow component. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs">SchedulerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | Logging configuration for a specific airflow component. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs">TaskLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | Logging configuration for a specific airflow component. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs">WebserverLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | Logging configuration for a specific airflow component. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs">WorkerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | Logging configuration for a specific airflow component. |

---

##### `DagProcessingLogs`<sup>Optional</sup> <a name="DagProcessingLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationDagProcessingLogs DagProcessingLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

Logging configuration for a specific airflow component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#dag_processing_logs MwaaEnvironment#dag_processing_logs}

---

##### `SchedulerLogs`<sup>Optional</sup> <a name="SchedulerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationSchedulerLogs SchedulerLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

Logging configuration for a specific airflow component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#scheduler_logs MwaaEnvironment#scheduler_logs}

---

##### `TaskLogs`<sup>Optional</sup> <a name="TaskLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationTaskLogs TaskLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

Logging configuration for a specific airflow component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#task_logs MwaaEnvironment#task_logs}

---

##### `WebserverLogs`<sup>Optional</sup> <a name="WebserverLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWebserverLogs WebserverLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

Logging configuration for a specific airflow component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#webserver_logs MwaaEnvironment#webserver_logs}

---

##### `WorkerLogs`<sup>Optional</sup> <a name="WorkerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWorkerLogs WorkerLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

Logging configuration for a specific airflow component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#worker_logs MwaaEnvironment#worker_logs}

---

### MwaaEnvironmentLoggingConfigurationDagProcessingLogs <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationDagProcessingLogs {
    bool|IResolvable Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationSchedulerLogs <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationSchedulerLogs {
    bool|IResolvable Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationTaskLogs <a name="MwaaEnvironmentLoggingConfigurationTaskLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationTaskLogs {
    bool|IResolvable Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWebserverLogs <a name="MwaaEnvironmentLoggingConfigurationWebserverLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationWebserverLogs {
    bool|IResolvable Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWorkerLogs <a name="MwaaEnvironmentLoggingConfigurationWorkerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationWorkerLogs {
    bool|IResolvable Enabled = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentNetworkConfiguration <a name="MwaaEnvironmentNetworkConfiguration" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentNetworkConfiguration {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | A list of security groups to use for the environment. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | A list of subnets to use for the environment. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of security groups to use for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

A list of subnets to use for the environment.

These must be private subnets, in the same VPC, in two different availability zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationDagProcessingLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---


### MwaaEnvironmentLoggingConfigurationOutputReference <a name="MwaaEnvironmentLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs">PutDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs">PutSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs">PutTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs">PutWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs">PutWorkerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs">ResetDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs">ResetSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs">ResetTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs">ResetWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs">ResetWorkerLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDagProcessingLogs` <a name="PutDagProcessingLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs"></a>

```csharp
private void PutDagProcessingLogs(MwaaEnvironmentLoggingConfigurationDagProcessingLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---

##### `PutSchedulerLogs` <a name="PutSchedulerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs"></a>

```csharp
private void PutSchedulerLogs(MwaaEnvironmentLoggingConfigurationSchedulerLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---

##### `PutTaskLogs` <a name="PutTaskLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs"></a>

```csharp
private void PutTaskLogs(MwaaEnvironmentLoggingConfigurationTaskLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---

##### `PutWebserverLogs` <a name="PutWebserverLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs"></a>

```csharp
private void PutWebserverLogs(MwaaEnvironmentLoggingConfigurationWebserverLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---

##### `PutWorkerLogs` <a name="PutWorkerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs"></a>

```csharp
private void PutWorkerLogs(MwaaEnvironmentLoggingConfigurationWorkerLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---

##### `ResetDagProcessingLogs` <a name="ResetDagProcessingLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs"></a>

```csharp
private void ResetDagProcessingLogs()
```

##### `ResetSchedulerLogs` <a name="ResetSchedulerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs"></a>

```csharp
private void ResetSchedulerLogs()
```

##### `ResetTaskLogs` <a name="ResetTaskLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs"></a>

```csharp
private void ResetTaskLogs()
```

##### `ResetWebserverLogs` <a name="ResetWebserverLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs"></a>

```csharp
private void ResetWebserverLogs()
```

##### `ResetWorkerLogs` <a name="ResetWorkerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs"></a>

```csharp
private void ResetWorkerLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs">DagProcessingLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs">SchedulerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs">TaskLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs">WebserverLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs">WorkerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput">DagProcessingLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput">SchedulerLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput">TaskLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput">WebserverLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput">WorkerLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DagProcessingLogs`<sup>Required</sup> <a name="DagProcessingLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference DagProcessingLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a>

---

##### `SchedulerLogs`<sup>Required</sup> <a name="SchedulerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference SchedulerLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a>

---

##### `TaskLogs`<sup>Required</sup> <a name="TaskLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference TaskLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a>

---

##### `WebserverLogs`<sup>Required</sup> <a name="WebserverLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference WebserverLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a>

---

##### `WorkerLogs`<sup>Required</sup> <a name="WorkerLogs" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs"></a>

```csharp
public MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference WorkerLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a>

---

##### `DagProcessingLogsInput`<sup>Optional</sup> <a name="DagProcessingLogsInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationDagProcessingLogs DagProcessingLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---

##### `SchedulerLogsInput`<sup>Optional</sup> <a name="SchedulerLogsInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationSchedulerLogs SchedulerLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---

##### `TaskLogsInput`<sup>Optional</sup> <a name="TaskLogsInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationTaskLogs TaskLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---

##### `WebserverLogsInput`<sup>Optional</sup> <a name="WebserverLogsInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationWebserverLogs WebserverLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---

##### `WorkerLogsInput`<sup>Optional</sup> <a name="WorkerLogsInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationWorkerLogs WorkerLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---


### MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationSchedulerLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---


### MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationTaskLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationWebserverLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaEnvironmentLoggingConfigurationWorkerLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---


### MwaaEnvironmentNetworkConfigurationOutputReference <a name="MwaaEnvironmentNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaEnvironmentNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaEnvironmentNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---



