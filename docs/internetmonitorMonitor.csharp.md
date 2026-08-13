# `internetmonitorMonitor` Submodule <a name="`internetmonitorMonitor` Submodule" id="@cdktn/provider-awscc.internetmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InternetmonitorMonitor <a name="InternetmonitorMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor awscc_internetmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitor(Construct Scope, string Id, InternetmonitorMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig">PutHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery">PutInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig">ResetHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetIncludeLinkedAccounts">ResetIncludeLinkedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery">ResetInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetLinkedAccountId">ResetLinkedAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor">ResetMaxCityNetworksToMonitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToAdd">ResetResourcesToAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToRemove">ResetResourcesToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor">ResetTrafficPercentageToMonitor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthEventsConfig` <a name="PutHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig"></a>

```csharp
private void PutHealthEventsConfig(InternetmonitorMonitorHealthEventsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `PutInternetMeasurementsLogDelivery` <a name="PutInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery"></a>

```csharp
private void PutInternetMeasurementsLogDelivery(InternetmonitorMonitorInternetMeasurementsLogDelivery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putTags"></a>

```csharp
private void PutTags(IResolvable|InternetmonitorMonitorTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]

---

##### `ResetHealthEventsConfig` <a name="ResetHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig"></a>

```csharp
private void ResetHealthEventsConfig()
```

##### `ResetIncludeLinkedAccounts` <a name="ResetIncludeLinkedAccounts" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetIncludeLinkedAccounts"></a>

```csharp
private void ResetIncludeLinkedAccounts()
```

##### `ResetInternetMeasurementsLogDelivery` <a name="ResetInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery"></a>

```csharp
private void ResetInternetMeasurementsLogDelivery()
```

##### `ResetLinkedAccountId` <a name="ResetLinkedAccountId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetLinkedAccountId"></a>

```csharp
private void ResetLinkedAccountId()
```

##### `ResetMaxCityNetworksToMonitor` <a name="ResetMaxCityNetworksToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor"></a>

```csharp
private void ResetMaxCityNetworksToMonitor()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetResourcesToAdd` <a name="ResetResourcesToAdd" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToAdd"></a>

```csharp
private void ResetResourcesToAdd()
```

##### `ResetResourcesToRemove` <a name="ResetResourcesToRemove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToRemove"></a>

```csharp
private void ResetResourcesToRemove()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTrafficPercentageToMonitor` <a name="ResetTrafficPercentageToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor"></a>

```csharp
private void ResetTrafficPercentageToMonitor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a InternetmonitorMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InternetmonitorMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InternetmonitorMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InternetmonitorMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InternetmonitorMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a InternetmonitorMonitor resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InternetmonitorMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InternetmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the InternetmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig">HealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery">InternetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorArn">MonitorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatus">ProcessingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatusInfo">ProcessingStatusInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList">InternetmonitorMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput">HealthEventsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccountsInput">IncludeLinkedAccountsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput">InternetMeasurementsLogDeliveryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountIdInput">LinkedAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput">MaxCityNetworksToMonitorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput">MonitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAddInput">ResourcesToAddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemoveInput">ResourcesToRemoveInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput">TrafficPercentageToMonitorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccounts">IncludeLinkedAccounts</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountId">LinkedAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor">MaxCityNetworksToMonitor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName">MonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAdd">ResourcesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemove">ResourcesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor">TrafficPercentageToMonitor</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `HealthEventsConfig`<sup>Required</sup> <a name="HealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfigOutputReference HealthEventsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternetMeasurementsLogDelivery`<sup>Required</sup> <a name="InternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference InternetMeasurementsLogDelivery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `MonitorArn`<sup>Required</sup> <a name="MonitorArn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorArn"></a>

```csharp
public string MonitorArn { get; }
```

- *Type:* string

---

##### `ProcessingStatus`<sup>Required</sup> <a name="ProcessingStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatus"></a>

```csharp
public string ProcessingStatus { get; }
```

- *Type:* string

---

##### `ProcessingStatusInfo`<sup>Required</sup> <a name="ProcessingStatusInfo" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatusInfo"></a>

```csharp
public string ProcessingStatusInfo { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tags"></a>

```csharp
public InternetmonitorMonitorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList">InternetmonitorMonitorTagsList</a>

---

##### `HealthEventsConfigInput`<sup>Optional</sup> <a name="HealthEventsConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput"></a>

```csharp
public IResolvable|InternetmonitorMonitorHealthEventsConfig HealthEventsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `IncludeLinkedAccountsInput`<sup>Optional</sup> <a name="IncludeLinkedAccountsInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccountsInput"></a>

```csharp
public bool|IResolvable IncludeLinkedAccountsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternetMeasurementsLogDeliveryInput`<sup>Optional</sup> <a name="InternetMeasurementsLogDeliveryInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput"></a>

```csharp
public IResolvable|InternetmonitorMonitorInternetMeasurementsLogDelivery InternetMeasurementsLogDeliveryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `LinkedAccountIdInput`<sup>Optional</sup> <a name="LinkedAccountIdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountIdInput"></a>

```csharp
public string LinkedAccountIdInput { get; }
```

- *Type:* string

---

##### `MaxCityNetworksToMonitorInput`<sup>Optional</sup> <a name="MaxCityNetworksToMonitorInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput"></a>

```csharp
public double MaxCityNetworksToMonitorInput { get; }
```

- *Type:* double

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput"></a>

```csharp
public string MonitorNameInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `ResourcesToAddInput`<sup>Optional</sup> <a name="ResourcesToAddInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAddInput"></a>

```csharp
public string[] ResourcesToAddInput { get; }
```

- *Type:* string[]

---

##### `ResourcesToRemoveInput`<sup>Optional</sup> <a name="ResourcesToRemoveInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemoveInput"></a>

```csharp
public string[] ResourcesToRemoveInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput"></a>

```csharp
public IResolvable|InternetmonitorMonitorTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]

---

##### `TrafficPercentageToMonitorInput`<sup>Optional</sup> <a name="TrafficPercentageToMonitorInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput"></a>

```csharp
public double TrafficPercentageToMonitorInput { get; }
```

- *Type:* double

---

##### `IncludeLinkedAccounts`<sup>Required</sup> <a name="IncludeLinkedAccounts" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccounts"></a>

```csharp
public bool|IResolvable IncludeLinkedAccounts { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountId"></a>

```csharp
public string LinkedAccountId { get; }
```

- *Type:* string

---

##### `MaxCityNetworksToMonitor`<sup>Required</sup> <a name="MaxCityNetworksToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor"></a>

```csharp
public double MaxCityNetworksToMonitor { get; }
```

- *Type:* double

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName"></a>

```csharp
public string MonitorName { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourcesToAdd`<sup>Required</sup> <a name="ResourcesToAdd" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAdd"></a>

```csharp
public string[] ResourcesToAdd { get; }
```

- *Type:* string[]

---

##### `ResourcesToRemove`<sup>Required</sup> <a name="ResourcesToRemove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemove"></a>

```csharp
public string[] ResourcesToRemove { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TrafficPercentageToMonitor`<sup>Required</sup> <a name="TrafficPercentageToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor"></a>

```csharp
public double TrafficPercentageToMonitor { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InternetmonitorMonitorConfig <a name="InternetmonitorMonitorConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MonitorName,
    InternetmonitorMonitorHealthEventsConfig HealthEventsConfig = null,
    bool|IResolvable IncludeLinkedAccounts = null,
    InternetmonitorMonitorInternetMeasurementsLogDelivery InternetMeasurementsLogDelivery = null,
    string LinkedAccountId = null,
    double MaxCityNetworksToMonitor = null,
    string[] Resources = null,
    string[] ResourcesToAdd = null,
    string[] ResourcesToRemove = null,
    string Status = null,
    IResolvable|InternetmonitorMonitorTags[] Tags = null,
    double TrafficPercentageToMonitor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName">MonitorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig">HealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.includeLinkedAccounts">IncludeLinkedAccounts</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#include_linked_accounts InternetmonitorMonitor#include_linked_accounts}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery">InternetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.linkedAccountId">LinkedAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#linked_account_id InternetmonitorMonitor#linked_account_id}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor">MaxCityNetworksToMonitor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources">Resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToAdd">ResourcesToAdd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#resources_to_add InternetmonitorMonitor#resources_to_add}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToRemove">ResourcesToRemove</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#resources_to_remove InternetmonitorMonitor#resources_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor">TrafficPercentageToMonitor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName"></a>

```csharp
public string MonitorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}.

---

##### `HealthEventsConfig`<sup>Optional</sup> <a name="HealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfig HealthEventsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}.

---

##### `IncludeLinkedAccounts`<sup>Optional</sup> <a name="IncludeLinkedAccounts" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.includeLinkedAccounts"></a>

```csharp
public bool|IResolvable IncludeLinkedAccounts { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#include_linked_accounts InternetmonitorMonitor#include_linked_accounts}.

---

##### `InternetMeasurementsLogDelivery`<sup>Optional</sup> <a name="InternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDelivery InternetMeasurementsLogDelivery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}.

---

##### `LinkedAccountId`<sup>Optional</sup> <a name="LinkedAccountId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.linkedAccountId"></a>

```csharp
public string LinkedAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#linked_account_id InternetmonitorMonitor#linked_account_id}.

---

##### `MaxCityNetworksToMonitor`<sup>Optional</sup> <a name="MaxCityNetworksToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor"></a>

```csharp
public double MaxCityNetworksToMonitor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}.

---

##### `ResourcesToAdd`<sup>Optional</sup> <a name="ResourcesToAdd" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToAdd"></a>

```csharp
public string[] ResourcesToAdd { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#resources_to_add InternetmonitorMonitor#resources_to_add}.

---

##### `ResourcesToRemove`<sup>Optional</sup> <a name="ResourcesToRemove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToRemove"></a>

```csharp
public string[] ResourcesToRemove { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#resources_to_remove InternetmonitorMonitor#resources_to_remove}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags"></a>

```csharp
public IResolvable|InternetmonitorMonitorTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}.

---

##### `TrafficPercentageToMonitor`<sup>Optional</sup> <a name="TrafficPercentageToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor"></a>

```csharp
public double TrafficPercentageToMonitor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}.

---

### InternetmonitorMonitorHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorHealthEventsConfig {
    InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig AvailabilityLocalHealthEventsConfig = null,
    double AvailabilityScoreThreshold = null,
    InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig PerformanceLocalHealthEventsConfig = null,
    double PerformanceScoreThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityLocalHealthEventsConfig">AvailabilityLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#availability_local_health_events_config InternetmonitorMonitor#availability_local_health_events_config}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold">AvailabilityScoreThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceLocalHealthEventsConfig">PerformanceLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#performance_local_health_events_config InternetmonitorMonitor#performance_local_health_events_config}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold">PerformanceScoreThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}. |

---

##### `AvailabilityLocalHealthEventsConfig`<sup>Optional</sup> <a name="AvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityLocalHealthEventsConfig"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig AvailabilityLocalHealthEventsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#availability_local_health_events_config InternetmonitorMonitor#availability_local_health_events_config}.

---

##### `AvailabilityScoreThreshold`<sup>Optional</sup> <a name="AvailabilityScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold"></a>

```csharp
public double AvailabilityScoreThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}.

---

##### `PerformanceLocalHealthEventsConfig`<sup>Optional</sup> <a name="PerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceLocalHealthEventsConfig"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig PerformanceLocalHealthEventsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#performance_local_health_events_config InternetmonitorMonitor#performance_local_health_events_config}.

---

##### `PerformanceScoreThreshold`<sup>Optional</sup> <a name="PerformanceScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold"></a>

```csharp
public double PerformanceScoreThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}.

---

### InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig {
    double HealthScoreThreshold = null,
    double MinTrafficImpact = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |

---

##### `HealthScoreThreshold`<sup>Optional</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.healthScoreThreshold"></a>

```csharp
public double HealthScoreThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}.

---

##### `MinTrafficImpact`<sup>Optional</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.minTrafficImpact"></a>

```csharp
public double MinTrafficImpact { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

### InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig {
    double HealthScoreThreshold = null,
    double MinTrafficImpact = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |

---

##### `HealthScoreThreshold`<sup>Optional</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.healthScoreThreshold"></a>

```csharp
public double HealthScoreThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}.

---

##### `MinTrafficImpact`<sup>Optional</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.minTrafficImpact"></a>

```csharp
public double MinTrafficImpact { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

### InternetmonitorMonitorInternetMeasurementsLogDelivery <a name="InternetmonitorMonitorInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorInternetMeasurementsLogDelivery {
    InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config S3Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}. |

---

##### `S3Config`<sup>Optional</sup> <a name="S3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config S3Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}.

---

### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config {
    string BucketName = null,
    string BucketPrefix = null,
    string LogDeliveryStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus">LogDeliveryStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}.

---

##### `LogDeliveryStatus`<sup>Optional</sup> <a name="LogDeliveryStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus"></a>

```csharp
public string LogDeliveryStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}.

---

### InternetmonitorMonitorTags <a name="InternetmonitorMonitorTags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#key InternetmonitorMonitor#key}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#value InternetmonitorMonitor#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#key InternetmonitorMonitor#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/internetmonitor_monitor#value InternetmonitorMonitor#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold">ResetHealthScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetMinTrafficImpact">ResetMinTrafficImpact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthScoreThreshold` <a name="ResetHealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold"></a>

```csharp
private void ResetHealthScoreThreshold()
```

##### `ResetMinTrafficImpact` <a name="ResetMinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetMinTrafficImpact"></a>

```csharp
private void ResetMinTrafficImpact()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput">HealthScoreThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput">MinTrafficImpactInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthScoreThresholdInput`<sup>Optional</sup> <a name="HealthScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput"></a>

```csharp
public double HealthScoreThresholdInput { get; }
```

- *Type:* double

---

##### `MinTrafficImpactInput`<sup>Optional</sup> <a name="MinTrafficImpactInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput"></a>

```csharp
public double MinTrafficImpactInput { get; }
```

- *Type:* double

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `HealthScoreThreshold`<sup>Required</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```csharp
public double HealthScoreThreshold { get; }
```

- *Type:* double

---

##### `MinTrafficImpact`<sup>Required</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```csharp
public double MinTrafficImpact { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

---


### InternetmonitorMonitorHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorHealthEventsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putAvailabilityLocalHealthEventsConfig">PutAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putPerformanceLocalHealthEventsConfig">PutPerformanceLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityLocalHealthEventsConfig">ResetAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold">ResetAvailabilityScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceLocalHealthEventsConfig">ResetPerformanceLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold">ResetPerformanceScoreThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailabilityLocalHealthEventsConfig` <a name="PutAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putAvailabilityLocalHealthEventsConfig"></a>

```csharp
private void PutAvailabilityLocalHealthEventsConfig(InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putAvailabilityLocalHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

---

##### `PutPerformanceLocalHealthEventsConfig` <a name="PutPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putPerformanceLocalHealthEventsConfig"></a>

```csharp
private void PutPerformanceLocalHealthEventsConfig(InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putPerformanceLocalHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

---

##### `ResetAvailabilityLocalHealthEventsConfig` <a name="ResetAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityLocalHealthEventsConfig"></a>

```csharp
private void ResetAvailabilityLocalHealthEventsConfig()
```

##### `ResetAvailabilityScoreThreshold` <a name="ResetAvailabilityScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold"></a>

```csharp
private void ResetAvailabilityScoreThreshold()
```

##### `ResetPerformanceLocalHealthEventsConfig` <a name="ResetPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceLocalHealthEventsConfig"></a>

```csharp
private void ResetPerformanceLocalHealthEventsConfig()
```

##### `ResetPerformanceScoreThreshold` <a name="ResetPerformanceScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold"></a>

```csharp
private void ResetPerformanceScoreThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig">AvailabilityLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig">PerformanceLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfigInput">AvailabilityLocalHealthEventsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput">AvailabilityScoreThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfigInput">PerformanceLocalHealthEventsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput">PerformanceScoreThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold">AvailabilityScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold">PerformanceScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityLocalHealthEventsConfig`<sup>Required</sup> <a name="AvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference AvailabilityLocalHealthEventsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a>

---

##### `PerformanceLocalHealthEventsConfig`<sup>Required</sup> <a name="PerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference PerformanceLocalHealthEventsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a>

---

##### `AvailabilityLocalHealthEventsConfigInput`<sup>Optional</sup> <a name="AvailabilityLocalHealthEventsConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfigInput"></a>

```csharp
public IResolvable|InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig AvailabilityLocalHealthEventsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

---

##### `AvailabilityScoreThresholdInput`<sup>Optional</sup> <a name="AvailabilityScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput"></a>

```csharp
public double AvailabilityScoreThresholdInput { get; }
```

- *Type:* double

---

##### `PerformanceLocalHealthEventsConfigInput`<sup>Optional</sup> <a name="PerformanceLocalHealthEventsConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfigInput"></a>

```csharp
public IResolvable|InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig PerformanceLocalHealthEventsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

---

##### `PerformanceScoreThresholdInput`<sup>Optional</sup> <a name="PerformanceScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput"></a>

```csharp
public double PerformanceScoreThresholdInput { get; }
```

- *Type:* double

---

##### `AvailabilityScoreThreshold`<sup>Required</sup> <a name="AvailabilityScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold"></a>

```csharp
public double AvailabilityScoreThreshold { get; }
```

- *Type:* double

---

##### `PerformanceScoreThreshold`<sup>Required</sup> <a name="PerformanceScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold"></a>

```csharp
public double PerformanceScoreThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InternetmonitorMonitorHealthEventsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---


### InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold">ResetHealthScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetMinTrafficImpact">ResetMinTrafficImpact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthScoreThreshold` <a name="ResetHealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold"></a>

```csharp
private void ResetHealthScoreThreshold()
```

##### `ResetMinTrafficImpact` <a name="ResetMinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetMinTrafficImpact"></a>

```csharp
private void ResetMinTrafficImpact()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput">HealthScoreThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput">MinTrafficImpactInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthScoreThresholdInput`<sup>Optional</sup> <a name="HealthScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput"></a>

```csharp
public double HealthScoreThresholdInput { get; }
```

- *Type:* double

---

##### `MinTrafficImpactInput`<sup>Optional</sup> <a name="MinTrafficImpactInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput"></a>

```csharp
public double MinTrafficImpactInput { get; }
```

- *Type:* double

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `HealthScoreThreshold`<sup>Required</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```csharp
public double HealthScoreThreshold { get; }
```

- *Type:* double

---

##### `MinTrafficImpact`<sup>Required</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```csharp
public double MinTrafficImpact { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config">PutS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config">ResetS3Config</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Config` <a name="PutS3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config"></a>

```csharp
private void PutS3Config(InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `ResetS3Config` <a name="ResetS3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config"></a>

```csharp
private void ResetS3Config()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput">S3ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference S3Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a>

---

##### `S3ConfigInput`<sup>Optional</sup> <a name="S3ConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput"></a>

```csharp
public IResolvable|InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config S3ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InternetmonitorMonitorInternetMeasurementsLogDelivery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus">ResetLogDeliveryStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```

##### `ResetLogDeliveryStatus` <a name="ResetLogDeliveryStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus"></a>

```csharp
private void ResetLogDeliveryStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput">LogDeliveryStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus">LogDeliveryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `LogDeliveryStatusInput`<sup>Optional</sup> <a name="LogDeliveryStatusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput"></a>

```csharp
public string LogDeliveryStatusInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `LogDeliveryStatus`<sup>Required</sup> <a name="LogDeliveryStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus"></a>

```csharp
public string LogDeliveryStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---


### InternetmonitorMonitorTagsList <a name="InternetmonitorMonitorTagsList" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.get"></a>

```csharp
private InternetmonitorMonitorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.internalValue"></a>

```csharp
public IResolvable|InternetmonitorMonitorTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>[]

---


### InternetmonitorMonitorTagsOutputReference <a name="InternetmonitorMonitorTagsOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InternetmonitorMonitorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InternetmonitorMonitorTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags">InternetmonitorMonitorTags</a>

---



