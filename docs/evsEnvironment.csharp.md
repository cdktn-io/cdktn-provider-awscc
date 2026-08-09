# `evsEnvironment` Submodule <a name="`evsEnvironment` Submodule" id="@cdktn/provider-awscc.evsEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvsEnvironment <a name="EvsEnvironment" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment awscc_evs_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironment(Construct Scope, string Id, EvsEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig">EvsEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig">EvsEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo">PutConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts">PutHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans">PutInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo">PutLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups">PutServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames">PutVcfHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetConnectivityInfo">ResetConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetEnvironmentName">ResetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetInitialVlans">ResetInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetLicenseInfo">ResetLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetServiceAccessSecurityGroups">ResetServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetSiteId">ResetSiteId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetVcfHostnames">ResetVcfHostnames</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectivityInfo` <a name="PutConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo"></a>

```csharp
private void PutConnectivityInfo(EvsEnvironmentConnectivityInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---

##### `PutHosts` <a name="PutHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts"></a>

```csharp
private void PutHosts(IResolvable|EvsEnvironmentHosts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]

---

##### `PutInitialVlans` <a name="PutInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans"></a>

```csharp
private void PutInitialVlans(EvsEnvironmentInitialVlans Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---

##### `PutLicenseInfo` <a name="PutLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo"></a>

```csharp
private void PutLicenseInfo(EvsEnvironmentLicenseInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---

##### `PutServiceAccessSecurityGroups` <a name="PutServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups"></a>

```csharp
private void PutServiceAccessSecurityGroups(EvsEnvironmentServiceAccessSecurityGroups Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags"></a>

```csharp
private void PutTags(IResolvable|EvsEnvironmentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]

---

##### `PutVcfHostnames` <a name="PutVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames"></a>

```csharp
private void PutVcfHostnames(EvsEnvironmentVcfHostnames Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---

##### `ResetConnectivityInfo` <a name="ResetConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetConnectivityInfo"></a>

```csharp
private void ResetConnectivityInfo()
```

##### `ResetEnvironmentName` <a name="ResetEnvironmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetEnvironmentName"></a>

```csharp
private void ResetEnvironmentName()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetHosts"></a>

```csharp
private void ResetHosts()
```

##### `ResetInitialVlans` <a name="ResetInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetInitialVlans"></a>

```csharp
private void ResetInitialVlans()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLicenseInfo` <a name="ResetLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetLicenseInfo"></a>

```csharp
private void ResetLicenseInfo()
```

##### `ResetServiceAccessSecurityGroups` <a name="ResetServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetServiceAccessSecurityGroups"></a>

```csharp
private void ResetServiceAccessSecurityGroups()
```

##### `ResetSiteId` <a name="ResetSiteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetSiteId"></a>

```csharp
private void ResetSiteId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVcfHostnames` <a name="ResetVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetVcfHostnames"></a>

```csharp
private void ResetVcfHostnames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EvsEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvsEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvsEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvsEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EvsEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EvsEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EvsEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EvsEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EvsEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.checks">Checks</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList">EvsEnvironmentChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference">EvsEnvironmentConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList">EvsEnvironmentCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentArn">EnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentState">EnvironmentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hosts">Hosts</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList">EvsEnvironmentHostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlans">InitialVlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference">EvsEnvironmentInitialVlansOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfo">LicenseInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference">EvsEnvironmentLicenseInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroups">ServiceAccessSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference">EvsEnvironmentServiceAccessSecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.stateDetails">StateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList">EvsEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnames">VcfHostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference">EvsEnvironmentVcfHostnamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfoInput">ConnectivityInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentNameInput">EnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hostsInput">HostsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlansInput">InitialVlansInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfoInput">LicenseInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroupsInput">ServiceAccessSecurityGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetIdInput">ServiceAccessSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteIdInput">SiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAcceptedInput">TermsAcceptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnamesInput">VcfHostnamesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersionInput">VcfVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentName">EnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetId">ServiceAccessSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteId">SiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAccepted">TermsAccepted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersion">VcfVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Checks`<sup>Required</sup> <a name="Checks" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.checks"></a>

```csharp
public EvsEnvironmentChecksList Checks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList">EvsEnvironmentChecksList</a>

---

##### `ConnectivityInfo`<sup>Required</sup> <a name="ConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfo"></a>

```csharp
public EvsEnvironmentConnectivityInfoOutputReference ConnectivityInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference">EvsEnvironmentConnectivityInfoOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.credentials"></a>

```csharp
public EvsEnvironmentCredentialsList Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList">EvsEnvironmentCredentialsList</a>

---

##### `EnvironmentArn`<sup>Required</sup> <a name="EnvironmentArn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentArn"></a>

```csharp
public string EnvironmentArn { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `EnvironmentState`<sup>Required</sup> <a name="EnvironmentState" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentState"></a>

```csharp
public string EnvironmentState { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hosts"></a>

```csharp
public EvsEnvironmentHostsList Hosts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList">EvsEnvironmentHostsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialVlans`<sup>Required</sup> <a name="InitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlans"></a>

```csharp
public EvsEnvironmentInitialVlansOutputReference InitialVlans { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference">EvsEnvironmentInitialVlansOutputReference</a>

---

##### `LicenseInfo`<sup>Required</sup> <a name="LicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfo"></a>

```csharp
public EvsEnvironmentLicenseInfoOutputReference LicenseInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference">EvsEnvironmentLicenseInfoOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `ServiceAccessSecurityGroups`<sup>Required</sup> <a name="ServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroups"></a>

```csharp
public EvsEnvironmentServiceAccessSecurityGroupsOutputReference ServiceAccessSecurityGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference">EvsEnvironmentServiceAccessSecurityGroupsOutputReference</a>

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.stateDetails"></a>

```csharp
public string StateDetails { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tags"></a>

```csharp
public EvsEnvironmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList">EvsEnvironmentTagsList</a>

---

##### `VcfHostnames`<sup>Required</sup> <a name="VcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnames"></a>

```csharp
public EvsEnvironmentVcfHostnamesOutputReference VcfHostnames { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference">EvsEnvironmentVcfHostnamesOutputReference</a>

---

##### `ConnectivityInfoInput`<sup>Optional</sup> <a name="ConnectivityInfoInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfoInput"></a>

```csharp
public IResolvable|EvsEnvironmentConnectivityInfo ConnectivityInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---

##### `EnvironmentNameInput`<sup>Optional</sup> <a name="EnvironmentNameInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentNameInput"></a>

```csharp
public string EnvironmentNameInput { get; }
```

- *Type:* string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hostsInput"></a>

```csharp
public IResolvable|EvsEnvironmentHosts[] HostsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]

---

##### `InitialVlansInput`<sup>Optional</sup> <a name="InitialVlansInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlansInput"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlans InitialVlansInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LicenseInfoInput`<sup>Optional</sup> <a name="LicenseInfoInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfoInput"></a>

```csharp
public IResolvable|EvsEnvironmentLicenseInfo LicenseInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---

##### `ServiceAccessSecurityGroupsInput`<sup>Optional</sup> <a name="ServiceAccessSecurityGroupsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroupsInput"></a>

```csharp
public IResolvable|EvsEnvironmentServiceAccessSecurityGroups ServiceAccessSecurityGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---

##### `ServiceAccessSubnetIdInput`<sup>Optional</sup> <a name="ServiceAccessSubnetIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetIdInput"></a>

```csharp
public string ServiceAccessSubnetIdInput { get; }
```

- *Type:* string

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteIdInput"></a>

```csharp
public string SiteIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tagsInput"></a>

```csharp
public IResolvable|EvsEnvironmentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]

---

##### `TermsAcceptedInput`<sup>Optional</sup> <a name="TermsAcceptedInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAcceptedInput"></a>

```csharp
public bool|IResolvable TermsAcceptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VcfHostnamesInput`<sup>Optional</sup> <a name="VcfHostnamesInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnamesInput"></a>

```csharp
public IResolvable|EvsEnvironmentVcfHostnames VcfHostnamesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---

##### `VcfVersionInput`<sup>Optional</sup> <a name="VcfVersionInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersionInput"></a>

```csharp
public string VcfVersionInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentName"></a>

```csharp
public string EnvironmentName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessSubnetId`<sup>Required</sup> <a name="ServiceAccessSubnetId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetId"></a>

```csharp
public string ServiceAccessSubnetId { get; }
```

- *Type:* string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteId"></a>

```csharp
public string SiteId { get; }
```

- *Type:* string

---

##### `TermsAccepted`<sup>Required</sup> <a name="TermsAccepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAccepted"></a>

```csharp
public bool|IResolvable TermsAccepted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VcfVersion`<sup>Required</sup> <a name="VcfVersion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersion"></a>

```csharp
public string VcfVersion { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvsEnvironmentChecks <a name="EvsEnvironmentChecks" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentChecks {

};
```


### EvsEnvironmentConfig <a name="EvsEnvironmentConfig" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ServiceAccessSubnetId,
    bool|IResolvable TermsAccepted,
    string VcfVersion,
    string VpcId,
    EvsEnvironmentConnectivityInfo ConnectivityInfo = null,
    string EnvironmentName = null,
    IResolvable|EvsEnvironmentHosts[] Hosts = null,
    EvsEnvironmentInitialVlans InitialVlans = null,
    string KmsKeyId = null,
    EvsEnvironmentLicenseInfo LicenseInfo = null,
    EvsEnvironmentServiceAccessSecurityGroups ServiceAccessSecurityGroups = null,
    string SiteId = null,
    IResolvable|EvsEnvironmentTags[] Tags = null,
    EvsEnvironmentVcfHostnames VcfHostnames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSubnetId">ServiceAccessSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.termsAccepted">TermsAccepted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfVersion">VcfVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.environmentName">EnvironmentName</a></code> | <code>string</code> | The name of an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.hosts">Hosts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]</code> | The initial hosts for environment only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.initialVlans">InitialVlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | The initial Vlan configuration only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.licenseInfo">LicenseInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | The license information for an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSecurityGroups">ServiceAccessSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.siteId">SiteId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfHostnames">VcfHostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ServiceAccessSubnetId`<sup>Required</sup> <a name="ServiceAccessSubnetId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSubnetId"></a>

```csharp
public string ServiceAccessSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}.

---

##### `TermsAccepted`<sup>Required</sup> <a name="TermsAccepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.termsAccepted"></a>

```csharp
public bool|IResolvable TermsAccepted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}.

---

##### `VcfVersion`<sup>Required</sup> <a name="VcfVersion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfVersion"></a>

```csharp
public string VcfVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}.

---

##### `ConnectivityInfo`<sup>Optional</sup> <a name="ConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connectivityInfo"></a>

```csharp
public EvsEnvironmentConnectivityInfo ConnectivityInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}.

---

##### `EnvironmentName`<sup>Optional</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.environmentName"></a>

```csharp
public string EnvironmentName { get; set; }
```

- *Type:* string

The name of an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#environment_name EvsEnvironment#environment_name}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.hosts"></a>

```csharp
public IResolvable|EvsEnvironmentHosts[] Hosts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]

The initial hosts for environment only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#hosts EvsEnvironment#hosts}

---

##### `InitialVlans`<sup>Optional</sup> <a name="InitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.initialVlans"></a>

```csharp
public EvsEnvironmentInitialVlans InitialVlans { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

The initial Vlan configuration only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#initial_vlans EvsEnvironment#initial_vlans}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}.

---

##### `LicenseInfo`<sup>Optional</sup> <a name="LicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.licenseInfo"></a>

```csharp
public EvsEnvironmentLicenseInfo LicenseInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

The license information for an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#license_info EvsEnvironment#license_info}

---

##### `ServiceAccessSecurityGroups`<sup>Optional</sup> <a name="ServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSecurityGroups"></a>

```csharp
public EvsEnvironmentServiceAccessSecurityGroups ServiceAccessSecurityGroups { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}.

---

##### `SiteId`<sup>Optional</sup> <a name="SiteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.siteId"></a>

```csharp
public string SiteId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.tags"></a>

```csharp
public IResolvable|EvsEnvironmentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#tags EvsEnvironment#tags}

---

##### `VcfHostnames`<sup>Optional</sup> <a name="VcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfHostnames"></a>

```csharp
public EvsEnvironmentVcfHostnames VcfHostnames { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}.

---

### EvsEnvironmentConnectivityInfo <a name="EvsEnvironmentConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentConnectivityInfo {
    string[] PrivateRouteServerPeerings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.property.privateRouteServerPeerings">PrivateRouteServerPeerings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#private_route_server_peerings EvsEnvironment#private_route_server_peerings}. |

---

##### `PrivateRouteServerPeerings`<sup>Optional</sup> <a name="PrivateRouteServerPeerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.property.privateRouteServerPeerings"></a>

```csharp
public string[] PrivateRouteServerPeerings { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#private_route_server_peerings EvsEnvironment#private_route_server_peerings}.

---

### EvsEnvironmentCredentials <a name="EvsEnvironmentCredentials" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentCredentials {

};
```


### EvsEnvironmentHosts <a name="EvsEnvironmentHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentHosts {
    string DedicatedHostId = null,
    string HostName = null,
    string InstanceType = null,
    string KeyName = null,
    string PlacementGroupId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.dedicatedHostId">DedicatedHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#dedicated_host_id EvsEnvironment#dedicated_host_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#host_name EvsEnvironment#host_name}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#instance_type EvsEnvironment#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#key_name EvsEnvironment#key_name}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.placementGroupId">PlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#placement_group_id EvsEnvironment#placement_group_id}. |

---

##### `DedicatedHostId`<sup>Optional</sup> <a name="DedicatedHostId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.dedicatedHostId"></a>

```csharp
public string DedicatedHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#dedicated_host_id EvsEnvironment#dedicated_host_id}.

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#host_name EvsEnvironment#host_name}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#instance_type EvsEnvironment#instance_type}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#key_name EvsEnvironment#key_name}.

---

##### `PlacementGroupId`<sup>Optional</sup> <a name="PlacementGroupId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.placementGroupId"></a>

```csharp
public string PlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#placement_group_id EvsEnvironment#placement_group_id}.

---

### EvsEnvironmentInitialVlans <a name="EvsEnvironmentInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlans {
    EvsEnvironmentInitialVlansEdgeVTep EdgeVTep = null,
    EvsEnvironmentInitialVlansExpansionVlan1 ExpansionVlan1 = null,
    EvsEnvironmentInitialVlansExpansionVlan2 ExpansionVlan2 = null,
    EvsEnvironmentInitialVlansHcx Hcx = null,
    string HcxNetworkAclId = null,
    bool|IResolvable IsHcxPublic = null,
    EvsEnvironmentInitialVlansNsxUpLink NsxUpLink = null,
    EvsEnvironmentInitialVlansVmkManagement VmkManagement = null,
    EvsEnvironmentInitialVlansVmManagement VmManagement = null,
    EvsEnvironmentInitialVlansVMotion VMotion = null,
    EvsEnvironmentInitialVlansVSan VSan = null,
    EvsEnvironmentInitialVlansVTep VTep = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.edgeVTep">EdgeVTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#edge_v_tep EvsEnvironment#edge_v_tep}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan1">ExpansionVlan1</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#expansion_vlan_1 EvsEnvironment#expansion_vlan_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan2">ExpansionVlan2</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#expansion_vlan_2 EvsEnvironment#expansion_vlan_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcx">Hcx</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#hcx EvsEnvironment#hcx}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcxNetworkAclId">HcxNetworkAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#hcx_network_acl_id EvsEnvironment#hcx_network_acl_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.isHcxPublic">IsHcxPublic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#is_hcx_public EvsEnvironment#is_hcx_public}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.nsxUpLink">NsxUpLink</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_up_link EvsEnvironment#nsx_up_link}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmkManagement">VmkManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vmk_management EvsEnvironment#vmk_management}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmManagement">VmManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vm_management EvsEnvironment#vm_management}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vMotion">VMotion</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#v_motion EvsEnvironment#v_motion}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vSan">VSan</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#v_san EvsEnvironment#v_san}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vTep">VTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#v_tep EvsEnvironment#v_tep}. |

---

##### `EdgeVTep`<sup>Optional</sup> <a name="EdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.edgeVTep"></a>

```csharp
public EvsEnvironmentInitialVlansEdgeVTep EdgeVTep { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#edge_v_tep EvsEnvironment#edge_v_tep}.

---

##### `ExpansionVlan1`<sup>Optional</sup> <a name="ExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan1"></a>

```csharp
public EvsEnvironmentInitialVlansExpansionVlan1 ExpansionVlan1 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#expansion_vlan_1 EvsEnvironment#expansion_vlan_1}.

---

##### `ExpansionVlan2`<sup>Optional</sup> <a name="ExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan2"></a>

```csharp
public EvsEnvironmentInitialVlansExpansionVlan2 ExpansionVlan2 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#expansion_vlan_2 EvsEnvironment#expansion_vlan_2}.

---

##### `Hcx`<sup>Optional</sup> <a name="Hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcx"></a>

```csharp
public EvsEnvironmentInitialVlansHcx Hcx { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#hcx EvsEnvironment#hcx}.

---

##### `HcxNetworkAclId`<sup>Optional</sup> <a name="HcxNetworkAclId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcxNetworkAclId"></a>

```csharp
public string HcxNetworkAclId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#hcx_network_acl_id EvsEnvironment#hcx_network_acl_id}.

---

##### `IsHcxPublic`<sup>Optional</sup> <a name="IsHcxPublic" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.isHcxPublic"></a>

```csharp
public bool|IResolvable IsHcxPublic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#is_hcx_public EvsEnvironment#is_hcx_public}.

---

##### `NsxUpLink`<sup>Optional</sup> <a name="NsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.nsxUpLink"></a>

```csharp
public EvsEnvironmentInitialVlansNsxUpLink NsxUpLink { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_up_link EvsEnvironment#nsx_up_link}.

---

##### `VmkManagement`<sup>Optional</sup> <a name="VmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmkManagement"></a>

```csharp
public EvsEnvironmentInitialVlansVmkManagement VmkManagement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vmk_management EvsEnvironment#vmk_management}.

---

##### `VmManagement`<sup>Optional</sup> <a name="VmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmManagement"></a>

```csharp
public EvsEnvironmentInitialVlansVmManagement VmManagement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vm_management EvsEnvironment#vm_management}.

---

##### `VMotion`<sup>Optional</sup> <a name="VMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vMotion"></a>

```csharp
public EvsEnvironmentInitialVlansVMotion VMotion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#v_motion EvsEnvironment#v_motion}.

---

##### `VSan`<sup>Optional</sup> <a name="VSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vSan"></a>

```csharp
public EvsEnvironmentInitialVlansVSan VSan { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#v_san EvsEnvironment#v_san}.

---

##### `VTep`<sup>Optional</sup> <a name="VTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vTep"></a>

```csharp
public EvsEnvironmentInitialVlansVTep VTep { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#v_tep EvsEnvironment#v_tep}.

---

### EvsEnvironmentInitialVlansEdgeVTep <a name="EvsEnvironmentInitialVlansEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansEdgeVTep {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansExpansionVlan1 <a name="EvsEnvironmentInitialVlansExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansExpansionVlan1 {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansExpansionVlan2 <a name="EvsEnvironmentInitialVlansExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansExpansionVlan2 {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansHcx <a name="EvsEnvironmentInitialVlansHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansHcx {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansNsxUpLink <a name="EvsEnvironmentInitialVlansNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansNsxUpLink {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVmkManagement <a name="EvsEnvironmentInitialVlansVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVmkManagement {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVmManagement <a name="EvsEnvironmentInitialVlansVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVmManagement {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVMotion <a name="EvsEnvironmentInitialVlansVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVMotion {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVSan <a name="EvsEnvironmentInitialVlansVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVSan {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVTep <a name="EvsEnvironmentInitialVlansVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVTep {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentLicenseInfo <a name="EvsEnvironmentLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentLicenseInfo {
    string SolutionKey = null,
    string VsanKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.solutionKey">SolutionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#solution_key EvsEnvironment#solution_key}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.vsanKey">VsanKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vsan_key EvsEnvironment#vsan_key}. |

---

##### `SolutionKey`<sup>Optional</sup> <a name="SolutionKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.solutionKey"></a>

```csharp
public string SolutionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#solution_key EvsEnvironment#solution_key}.

---

##### `VsanKey`<sup>Optional</sup> <a name="VsanKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.vsanKey"></a>

```csharp
public string VsanKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#vsan_key EvsEnvironment#vsan_key}.

---

### EvsEnvironmentServiceAccessSecurityGroups <a name="EvsEnvironmentServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentServiceAccessSecurityGroups {
    string[] SecurityGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#security_groups EvsEnvironment#security_groups}. |

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#security_groups EvsEnvironment#security_groups}.

---

### EvsEnvironmentTags <a name="EvsEnvironmentTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#key EvsEnvironment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#value EvsEnvironment#value}

---

### EvsEnvironmentVcfHostnames <a name="EvsEnvironmentVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentVcfHostnames {
    string CloudBuilder = null,
    string Nsx = null,
    string NsxEdge1 = null,
    string NsxEdge2 = null,
    string NsxManager1 = null,
    string NsxManager2 = null,
    string NsxManager3 = null,
    string SddcManager = null,
    string VCenter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.cloudBuilder">CloudBuilder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cloud_builder EvsEnvironment#cloud_builder}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsx">Nsx</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx EvsEnvironment#nsx}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge1">NsxEdge1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_edge_1 EvsEnvironment#nsx_edge_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge2">NsxEdge2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_edge_2 EvsEnvironment#nsx_edge_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager1">NsxManager1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_manager_1 EvsEnvironment#nsx_manager_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager2">NsxManager2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_manager_2 EvsEnvironment#nsx_manager_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager3">NsxManager3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_manager_3 EvsEnvironment#nsx_manager_3}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.sddcManager">SddcManager</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#sddc_manager EvsEnvironment#sddc_manager}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.vCenter">VCenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#v_center EvsEnvironment#v_center}. |

---

##### `CloudBuilder`<sup>Optional</sup> <a name="CloudBuilder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.cloudBuilder"></a>

```csharp
public string CloudBuilder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#cloud_builder EvsEnvironment#cloud_builder}.

---

##### `Nsx`<sup>Optional</sup> <a name="Nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsx"></a>

```csharp
public string Nsx { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx EvsEnvironment#nsx}.

---

##### `NsxEdge1`<sup>Optional</sup> <a name="NsxEdge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge1"></a>

```csharp
public string NsxEdge1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_edge_1 EvsEnvironment#nsx_edge_1}.

---

##### `NsxEdge2`<sup>Optional</sup> <a name="NsxEdge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge2"></a>

```csharp
public string NsxEdge2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_edge_2 EvsEnvironment#nsx_edge_2}.

---

##### `NsxManager1`<sup>Optional</sup> <a name="NsxManager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager1"></a>

```csharp
public string NsxManager1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_manager_1 EvsEnvironment#nsx_manager_1}.

---

##### `NsxManager2`<sup>Optional</sup> <a name="NsxManager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager2"></a>

```csharp
public string NsxManager2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_manager_2 EvsEnvironment#nsx_manager_2}.

---

##### `NsxManager3`<sup>Optional</sup> <a name="NsxManager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager3"></a>

```csharp
public string NsxManager3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#nsx_manager_3 EvsEnvironment#nsx_manager_3}.

---

##### `SddcManager`<sup>Optional</sup> <a name="SddcManager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.sddcManager"></a>

```csharp
public string SddcManager { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#sddc_manager EvsEnvironment#sddc_manager}.

---

##### `VCenter`<sup>Optional</sup> <a name="VCenter" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.vCenter"></a>

```csharp
public string VCenter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evs_environment#v_center EvsEnvironment#v_center}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvsEnvironmentChecksList <a name="EvsEnvironmentChecksList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get"></a>

```csharp
private EvsEnvironmentChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EvsEnvironmentChecksOutputReference <a name="EvsEnvironmentChecksOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.impairedSince">ImpairedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks">EvsEnvironmentChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImpairedSince`<sup>Required</sup> <a name="ImpairedSince" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.impairedSince"></a>

```csharp
public string ImpairedSince { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.internalValue"></a>

```csharp
public EvsEnvironmentChecks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks">EvsEnvironmentChecks</a>

---


### EvsEnvironmentConnectivityInfoOutputReference <a name="EvsEnvironmentConnectivityInfoOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentConnectivityInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resetPrivateRouteServerPeerings">ResetPrivateRouteServerPeerings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateRouteServerPeerings` <a name="ResetPrivateRouteServerPeerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resetPrivateRouteServerPeerings"></a>

```csharp
private void ResetPrivateRouteServerPeerings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeeringsInput">PrivateRouteServerPeeringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings">PrivateRouteServerPeerings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateRouteServerPeeringsInput`<sup>Optional</sup> <a name="PrivateRouteServerPeeringsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeeringsInput"></a>

```csharp
public string[] PrivateRouteServerPeeringsInput { get; }
```

- *Type:* string[]

---

##### `PrivateRouteServerPeerings`<sup>Required</sup> <a name="PrivateRouteServerPeerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings"></a>

```csharp
public string[] PrivateRouteServerPeerings { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentConnectivityInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---


### EvsEnvironmentCredentialsList <a name="EvsEnvironmentCredentialsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get"></a>

```csharp
private EvsEnvironmentCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EvsEnvironmentCredentialsOutputReference <a name="EvsEnvironmentCredentialsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials">EvsEnvironmentCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.internalValue"></a>

```csharp
public EvsEnvironmentCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials">EvsEnvironmentCredentials</a>

---


### EvsEnvironmentHostsList <a name="EvsEnvironmentHostsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentHostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get"></a>

```csharp
private EvsEnvironmentHostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentHosts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]

---


### EvsEnvironmentHostsOutputReference <a name="EvsEnvironmentHostsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetDedicatedHostId">ResetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetPlacementGroupId">ResetPlacementGroupId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDedicatedHostId` <a name="ResetDedicatedHostId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetDedicatedHostId"></a>

```csharp
private void ResetDedicatedHostId()
```

##### `ResetHostName` <a name="ResetHostName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetHostName"></a>

```csharp
private void ResetHostName()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetPlacementGroupId` <a name="ResetPlacementGroupId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetPlacementGroupId"></a>

```csharp
private void ResetPlacementGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostIdInput">DedicatedHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupIdInput">PlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostId">DedicatedHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupId">PlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DedicatedHostIdInput`<sup>Optional</sup> <a name="DedicatedHostIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostIdInput"></a>

```csharp
public string DedicatedHostIdInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `PlacementGroupIdInput`<sup>Optional</sup> <a name="PlacementGroupIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupIdInput"></a>

```csharp
public string PlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `DedicatedHostId`<sup>Required</sup> <a name="DedicatedHostId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostId"></a>

```csharp
public string DedicatedHostId { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `PlacementGroupId`<sup>Required</sup> <a name="PlacementGroupId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupId"></a>

```csharp
public string PlacementGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentHosts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>

---


### EvsEnvironmentInitialVlansEdgeVTepOutputReference <a name="EvsEnvironmentInitialVlansEdgeVTepOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansEdgeVTepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansEdgeVTep InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---


### EvsEnvironmentInitialVlansExpansionVlan1OutputReference <a name="EvsEnvironmentInitialVlansExpansionVlan1OutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansExpansionVlan1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansExpansionVlan1 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---


### EvsEnvironmentInitialVlansExpansionVlan2OutputReference <a name="EvsEnvironmentInitialVlansExpansionVlan2OutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansExpansionVlan2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansExpansionVlan2 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---


### EvsEnvironmentInitialVlansHcxOutputReference <a name="EvsEnvironmentInitialVlansHcxOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansHcxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansHcx InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---


### EvsEnvironmentInitialVlansNsxUpLinkOutputReference <a name="EvsEnvironmentInitialVlansNsxUpLinkOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansNsxUpLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansNsxUpLink InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---


### EvsEnvironmentInitialVlansOutputReference <a name="EvsEnvironmentInitialVlansOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep">PutEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1">PutExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2">PutExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx">PutHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink">PutNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement">PutVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement">PutVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion">PutVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan">PutVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep">PutVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetEdgeVTep">ResetEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan1">ResetExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan2">ResetExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcx">ResetHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcxNetworkAclId">ResetHcxNetworkAclId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetIsHcxPublic">ResetIsHcxPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetNsxUpLink">ResetNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmkManagement">ResetVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmManagement">ResetVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVMotion">ResetVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVSan">ResetVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVTep">ResetVTep</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEdgeVTep` <a name="PutEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep"></a>

```csharp
private void PutEdgeVTep(EvsEnvironmentInitialVlansEdgeVTep Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---

##### `PutExpansionVlan1` <a name="PutExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1"></a>

```csharp
private void PutExpansionVlan1(EvsEnvironmentInitialVlansExpansionVlan1 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---

##### `PutExpansionVlan2` <a name="PutExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2"></a>

```csharp
private void PutExpansionVlan2(EvsEnvironmentInitialVlansExpansionVlan2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---

##### `PutHcx` <a name="PutHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx"></a>

```csharp
private void PutHcx(EvsEnvironmentInitialVlansHcx Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---

##### `PutNsxUpLink` <a name="PutNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink"></a>

```csharp
private void PutNsxUpLink(EvsEnvironmentInitialVlansNsxUpLink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---

##### `PutVmkManagement` <a name="PutVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement"></a>

```csharp
private void PutVmkManagement(EvsEnvironmentInitialVlansVmkManagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---

##### `PutVmManagement` <a name="PutVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement"></a>

```csharp
private void PutVmManagement(EvsEnvironmentInitialVlansVmManagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---

##### `PutVMotion` <a name="PutVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion"></a>

```csharp
private void PutVMotion(EvsEnvironmentInitialVlansVMotion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---

##### `PutVSan` <a name="PutVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan"></a>

```csharp
private void PutVSan(EvsEnvironmentInitialVlansVSan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---

##### `PutVTep` <a name="PutVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep"></a>

```csharp
private void PutVTep(EvsEnvironmentInitialVlansVTep Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---

##### `ResetEdgeVTep` <a name="ResetEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetEdgeVTep"></a>

```csharp
private void ResetEdgeVTep()
```

##### `ResetExpansionVlan1` <a name="ResetExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan1"></a>

```csharp
private void ResetExpansionVlan1()
```

##### `ResetExpansionVlan2` <a name="ResetExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan2"></a>

```csharp
private void ResetExpansionVlan2()
```

##### `ResetHcx` <a name="ResetHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcx"></a>

```csharp
private void ResetHcx()
```

##### `ResetHcxNetworkAclId` <a name="ResetHcxNetworkAclId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcxNetworkAclId"></a>

```csharp
private void ResetHcxNetworkAclId()
```

##### `ResetIsHcxPublic` <a name="ResetIsHcxPublic" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetIsHcxPublic"></a>

```csharp
private void ResetIsHcxPublic()
```

##### `ResetNsxUpLink` <a name="ResetNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetNsxUpLink"></a>

```csharp
private void ResetNsxUpLink()
```

##### `ResetVmkManagement` <a name="ResetVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmkManagement"></a>

```csharp
private void ResetVmkManagement()
```

##### `ResetVmManagement` <a name="ResetVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmManagement"></a>

```csharp
private void ResetVmManagement()
```

##### `ResetVMotion` <a name="ResetVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVMotion"></a>

```csharp
private void ResetVMotion()
```

##### `ResetVSan` <a name="ResetVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVSan"></a>

```csharp
private void ResetVSan()
```

##### `ResetVTep` <a name="ResetVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVTep"></a>

```csharp
private void ResetVTep()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTep">EdgeVTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference">EvsEnvironmentInitialVlansEdgeVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1">ExpansionVlan1</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference">EvsEnvironmentInitialVlansExpansionVlan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2">ExpansionVlan2</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference">EvsEnvironmentInitialVlansExpansionVlan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcx">Hcx</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference">EvsEnvironmentInitialVlansHcxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLink">NsxUpLink</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference">EvsEnvironmentInitialVlansNsxUpLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagement">VmkManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference">EvsEnvironmentInitialVlansVmkManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagement">VmManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference">EvsEnvironmentInitialVlansVmManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotion">VMotion</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference">EvsEnvironmentInitialVlansVMotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSan">VSan</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference">EvsEnvironmentInitialVlansVSanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTep">VTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference">EvsEnvironmentInitialVlansVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTepInput">EdgeVTepInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1Input">ExpansionVlan1Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2Input">ExpansionVlan2Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxInput">HcxInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclIdInput">HcxNetworkAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublicInput">IsHcxPublicInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLinkInput">NsxUpLinkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagementInput">VmkManagementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagementInput">VmManagementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotionInput">VMotionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSanInput">VSanInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTepInput">VTepInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId">HcxNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublic">IsHcxPublic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EdgeVTep`<sup>Required</sup> <a name="EdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTep"></a>

```csharp
public EvsEnvironmentInitialVlansEdgeVTepOutputReference EdgeVTep { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference">EvsEnvironmentInitialVlansEdgeVTepOutputReference</a>

---

##### `ExpansionVlan1`<sup>Required</sup> <a name="ExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1"></a>

```csharp
public EvsEnvironmentInitialVlansExpansionVlan1OutputReference ExpansionVlan1 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference">EvsEnvironmentInitialVlansExpansionVlan1OutputReference</a>

---

##### `ExpansionVlan2`<sup>Required</sup> <a name="ExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2"></a>

```csharp
public EvsEnvironmentInitialVlansExpansionVlan2OutputReference ExpansionVlan2 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference">EvsEnvironmentInitialVlansExpansionVlan2OutputReference</a>

---

##### `Hcx`<sup>Required</sup> <a name="Hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcx"></a>

```csharp
public EvsEnvironmentInitialVlansHcxOutputReference Hcx { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference">EvsEnvironmentInitialVlansHcxOutputReference</a>

---

##### `NsxUpLink`<sup>Required</sup> <a name="NsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLink"></a>

```csharp
public EvsEnvironmentInitialVlansNsxUpLinkOutputReference NsxUpLink { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference">EvsEnvironmentInitialVlansNsxUpLinkOutputReference</a>

---

##### `VmkManagement`<sup>Required</sup> <a name="VmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagement"></a>

```csharp
public EvsEnvironmentInitialVlansVmkManagementOutputReference VmkManagement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference">EvsEnvironmentInitialVlansVmkManagementOutputReference</a>

---

##### `VmManagement`<sup>Required</sup> <a name="VmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagement"></a>

```csharp
public EvsEnvironmentInitialVlansVmManagementOutputReference VmManagement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference">EvsEnvironmentInitialVlansVmManagementOutputReference</a>

---

##### `VMotion`<sup>Required</sup> <a name="VMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotion"></a>

```csharp
public EvsEnvironmentInitialVlansVMotionOutputReference VMotion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference">EvsEnvironmentInitialVlansVMotionOutputReference</a>

---

##### `VSan`<sup>Required</sup> <a name="VSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSan"></a>

```csharp
public EvsEnvironmentInitialVlansVSanOutputReference VSan { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference">EvsEnvironmentInitialVlansVSanOutputReference</a>

---

##### `VTep`<sup>Required</sup> <a name="VTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTep"></a>

```csharp
public EvsEnvironmentInitialVlansVTepOutputReference VTep { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference">EvsEnvironmentInitialVlansVTepOutputReference</a>

---

##### `EdgeVTepInput`<sup>Optional</sup> <a name="EdgeVTepInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTepInput"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansEdgeVTep EdgeVTepInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---

##### `ExpansionVlan1Input`<sup>Optional</sup> <a name="ExpansionVlan1Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1Input"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansExpansionVlan1 ExpansionVlan1Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---

##### `ExpansionVlan2Input`<sup>Optional</sup> <a name="ExpansionVlan2Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2Input"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansExpansionVlan2 ExpansionVlan2Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---

##### `HcxInput`<sup>Optional</sup> <a name="HcxInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxInput"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansHcx HcxInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---

##### `HcxNetworkAclIdInput`<sup>Optional</sup> <a name="HcxNetworkAclIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclIdInput"></a>

```csharp
public string HcxNetworkAclIdInput { get; }
```

- *Type:* string

---

##### `IsHcxPublicInput`<sup>Optional</sup> <a name="IsHcxPublicInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublicInput"></a>

```csharp
public bool|IResolvable IsHcxPublicInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NsxUpLinkInput`<sup>Optional</sup> <a name="NsxUpLinkInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLinkInput"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansNsxUpLink NsxUpLinkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---

##### `VmkManagementInput`<sup>Optional</sup> <a name="VmkManagementInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagementInput"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVmkManagement VmkManagementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---

##### `VmManagementInput`<sup>Optional</sup> <a name="VmManagementInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagementInput"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVmManagement VmManagementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---

##### `VMotionInput`<sup>Optional</sup> <a name="VMotionInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotionInput"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVMotion VMotionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---

##### `VSanInput`<sup>Optional</sup> <a name="VSanInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSanInput"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVSan VSanInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---

##### `VTepInput`<sup>Optional</sup> <a name="VTepInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTepInput"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVTep VTepInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---

##### `HcxNetworkAclId`<sup>Required</sup> <a name="HcxNetworkAclId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId"></a>

```csharp
public string HcxNetworkAclId { get; }
```

- *Type:* string

---

##### `IsHcxPublic`<sup>Required</sup> <a name="IsHcxPublic" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublic"></a>

```csharp
public bool|IResolvable IsHcxPublic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlans InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---


### EvsEnvironmentInitialVlansVmkManagementOutputReference <a name="EvsEnvironmentInitialVlansVmkManagementOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVmkManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVmkManagement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---


### EvsEnvironmentInitialVlansVmManagementOutputReference <a name="EvsEnvironmentInitialVlansVmManagementOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVmManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVmManagement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---


### EvsEnvironmentInitialVlansVMotionOutputReference <a name="EvsEnvironmentInitialVlansVMotionOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVMotionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVMotion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---


### EvsEnvironmentInitialVlansVSanOutputReference <a name="EvsEnvironmentInitialVlansVSanOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVSanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVSan InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---


### EvsEnvironmentInitialVlansVTepOutputReference <a name="EvsEnvironmentInitialVlansVTepOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentInitialVlansVTepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentInitialVlansVTep InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---


### EvsEnvironmentLicenseInfoOutputReference <a name="EvsEnvironmentLicenseInfoOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentLicenseInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetSolutionKey">ResetSolutionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetVsanKey">ResetVsanKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSolutionKey` <a name="ResetSolutionKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetSolutionKey"></a>

```csharp
private void ResetSolutionKey()
```

##### `ResetVsanKey` <a name="ResetVsanKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetVsanKey"></a>

```csharp
private void ResetVsanKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKeyInput">SolutionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKeyInput">VsanKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKey">SolutionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKey">VsanKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SolutionKeyInput`<sup>Optional</sup> <a name="SolutionKeyInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKeyInput"></a>

```csharp
public string SolutionKeyInput { get; }
```

- *Type:* string

---

##### `VsanKeyInput`<sup>Optional</sup> <a name="VsanKeyInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKeyInput"></a>

```csharp
public string VsanKeyInput { get; }
```

- *Type:* string

---

##### `SolutionKey`<sup>Required</sup> <a name="SolutionKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKey"></a>

```csharp
public string SolutionKey { get; }
```

- *Type:* string

---

##### `VsanKey`<sup>Required</sup> <a name="VsanKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKey"></a>

```csharp
public string VsanKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentLicenseInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---


### EvsEnvironmentServiceAccessSecurityGroupsOutputReference <a name="EvsEnvironmentServiceAccessSecurityGroupsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentServiceAccessSecurityGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentServiceAccessSecurityGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---


### EvsEnvironmentTagsList <a name="EvsEnvironmentTagsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get"></a>

```csharp
private EvsEnvironmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]

---


### EvsEnvironmentTagsOutputReference <a name="EvsEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>

---


### EvsEnvironmentVcfHostnamesOutputReference <a name="EvsEnvironmentVcfHostnamesOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EvsEnvironmentVcfHostnamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetCloudBuilder">ResetCloudBuilder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsx">ResetNsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge1">ResetNsxEdge1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge2">ResetNsxEdge2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager1">ResetNsxManager1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager2">ResetNsxManager2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager3">ResetNsxManager3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetSddcManager">ResetSddcManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetVCenter">ResetVCenter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudBuilder` <a name="ResetCloudBuilder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetCloudBuilder"></a>

```csharp
private void ResetCloudBuilder()
```

##### `ResetNsx` <a name="ResetNsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsx"></a>

```csharp
private void ResetNsx()
```

##### `ResetNsxEdge1` <a name="ResetNsxEdge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge1"></a>

```csharp
private void ResetNsxEdge1()
```

##### `ResetNsxEdge2` <a name="ResetNsxEdge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge2"></a>

```csharp
private void ResetNsxEdge2()
```

##### `ResetNsxManager1` <a name="ResetNsxManager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager1"></a>

```csharp
private void ResetNsxManager1()
```

##### `ResetNsxManager2` <a name="ResetNsxManager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager2"></a>

```csharp
private void ResetNsxManager2()
```

##### `ResetNsxManager3` <a name="ResetNsxManager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager3"></a>

```csharp
private void ResetNsxManager3()
```

##### `ResetSddcManager` <a name="ResetSddcManager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetSddcManager"></a>

```csharp
private void ResetSddcManager()
```

##### `ResetVCenter` <a name="ResetVCenter" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetVCenter"></a>

```csharp
private void ResetVCenter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilderInput">CloudBuilderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1Input">NsxEdge1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2Input">NsxEdge2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxInput">NsxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1Input">NsxManager1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2Input">NsxManager2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3Input">NsxManager3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManagerInput">SddcManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenterInput">VCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder">CloudBuilder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsx">Nsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1">NsxEdge1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2">NsxEdge2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1">NsxManager1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2">NsxManager2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3">NsxManager3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManager">SddcManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenter">VCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudBuilderInput`<sup>Optional</sup> <a name="CloudBuilderInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilderInput"></a>

```csharp
public string CloudBuilderInput { get; }
```

- *Type:* string

---

##### `NsxEdge1Input`<sup>Optional</sup> <a name="NsxEdge1Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1Input"></a>

```csharp
public string NsxEdge1Input { get; }
```

- *Type:* string

---

##### `NsxEdge2Input`<sup>Optional</sup> <a name="NsxEdge2Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2Input"></a>

```csharp
public string NsxEdge2Input { get; }
```

- *Type:* string

---

##### `NsxInput`<sup>Optional</sup> <a name="NsxInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxInput"></a>

```csharp
public string NsxInput { get; }
```

- *Type:* string

---

##### `NsxManager1Input`<sup>Optional</sup> <a name="NsxManager1Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1Input"></a>

```csharp
public string NsxManager1Input { get; }
```

- *Type:* string

---

##### `NsxManager2Input`<sup>Optional</sup> <a name="NsxManager2Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2Input"></a>

```csharp
public string NsxManager2Input { get; }
```

- *Type:* string

---

##### `NsxManager3Input`<sup>Optional</sup> <a name="NsxManager3Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3Input"></a>

```csharp
public string NsxManager3Input { get; }
```

- *Type:* string

---

##### `SddcManagerInput`<sup>Optional</sup> <a name="SddcManagerInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManagerInput"></a>

```csharp
public string SddcManagerInput { get; }
```

- *Type:* string

---

##### `VCenterInput`<sup>Optional</sup> <a name="VCenterInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenterInput"></a>

```csharp
public string VCenterInput { get; }
```

- *Type:* string

---

##### `CloudBuilder`<sup>Required</sup> <a name="CloudBuilder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder"></a>

```csharp
public string CloudBuilder { get; }
```

- *Type:* string

---

##### `Nsx`<sup>Required</sup> <a name="Nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsx"></a>

```csharp
public string Nsx { get; }
```

- *Type:* string

---

##### `NsxEdge1`<sup>Required</sup> <a name="NsxEdge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1"></a>

```csharp
public string NsxEdge1 { get; }
```

- *Type:* string

---

##### `NsxEdge2`<sup>Required</sup> <a name="NsxEdge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2"></a>

```csharp
public string NsxEdge2 { get; }
```

- *Type:* string

---

##### `NsxManager1`<sup>Required</sup> <a name="NsxManager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1"></a>

```csharp
public string NsxManager1 { get; }
```

- *Type:* string

---

##### `NsxManager2`<sup>Required</sup> <a name="NsxManager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2"></a>

```csharp
public string NsxManager2 { get; }
```

- *Type:* string

---

##### `NsxManager3`<sup>Required</sup> <a name="NsxManager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3"></a>

```csharp
public string NsxManager3 { get; }
```

- *Type:* string

---

##### `SddcManager`<sup>Required</sup> <a name="SddcManager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManager"></a>

```csharp
public string SddcManager { get; }
```

- *Type:* string

---

##### `VCenter`<sup>Required</sup> <a name="VCenter" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenter"></a>

```csharp
public string VCenter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EvsEnvironmentVcfHostnames InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---



