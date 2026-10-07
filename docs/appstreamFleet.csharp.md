# `appstreamFleet` Submodule <a name="`appstreamFleet` Submodule" id="@cdktn/provider-awscc.appstreamFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamFleet <a name="AppstreamFleet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet awscc_appstream_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleet(Construct Scope, string Id, AppstreamFleetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig">AppstreamFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig">AppstreamFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity">PutComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo">PutDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig">PutRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location">PutSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetAttributesToDelete">ResetAttributesToDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetComputeCapacity">ResetComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisableImdsv1">ResetDisableImdsv1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds">ResetDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDomainJoinInfo">ResetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess">ResetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetFleetType">ResetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds">ResetIdleDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageArn">ResetImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxConcurrentSessions">ResetMaxConcurrentSessions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxSessionsPerInstance">ResetMaxSessionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds">ResetMaxUserDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetRootVolumeConfig">ResetRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetSessionScriptS3Location">ResetSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetStreamView">ResetStreamView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetUsbDeviceFilterStrings">ResetUsbDeviceFilterStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeCapacity` <a name="PutComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity"></a>

```csharp
private void PutComputeCapacity(AppstreamFleetComputeCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---

##### `PutDomainJoinInfo` <a name="PutDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo"></a>

```csharp
private void PutDomainJoinInfo(AppstreamFleetDomainJoinInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---

##### `PutRootVolumeConfig` <a name="PutRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig"></a>

```csharp
private void PutRootVolumeConfig(AppstreamFleetRootVolumeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---

##### `PutSessionScriptS3Location` <a name="PutSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location"></a>

```csharp
private void PutSessionScriptS3Location(AppstreamFleetSessionScriptS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags"></a>

```csharp
private void PutTags(IResolvable|AppstreamFleetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig"></a>

```csharp
private void PutVpcConfig(AppstreamFleetVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---

##### `ResetAttributesToDelete` <a name="ResetAttributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetAttributesToDelete"></a>

```csharp
private void ResetAttributesToDelete()
```

##### `ResetComputeCapacity` <a name="ResetComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetComputeCapacity"></a>

```csharp
private void ResetComputeCapacity()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableImdsv1` <a name="ResetDisableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisableImdsv1"></a>

```csharp
private void ResetDisableImdsv1()
```

##### `ResetDisconnectTimeoutInSeconds` <a name="ResetDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds"></a>

```csharp
private void ResetDisconnectTimeoutInSeconds()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDomainJoinInfo` <a name="ResetDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDomainJoinInfo"></a>

```csharp
private void ResetDomainJoinInfo()
```

##### `ResetEnableDefaultInternetAccess` <a name="ResetEnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess"></a>

```csharp
private void ResetEnableDefaultInternetAccess()
```

##### `ResetFleetType` <a name="ResetFleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetFleetType"></a>

```csharp
private void ResetFleetType()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIamRoleArn"></a>

```csharp
private void ResetIamRoleArn()
```

##### `ResetIdleDisconnectTimeoutInSeconds` <a name="ResetIdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds"></a>

```csharp
private void ResetIdleDisconnectTimeoutInSeconds()
```

##### `ResetImageArn` <a name="ResetImageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageArn"></a>

```csharp
private void ResetImageArn()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageName"></a>

```csharp
private void ResetImageName()
```

##### `ResetMaxConcurrentSessions` <a name="ResetMaxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxConcurrentSessions"></a>

```csharp
private void ResetMaxConcurrentSessions()
```

##### `ResetMaxSessionsPerInstance` <a name="ResetMaxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxSessionsPerInstance"></a>

```csharp
private void ResetMaxSessionsPerInstance()
```

##### `ResetMaxUserDurationInSeconds` <a name="ResetMaxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds"></a>

```csharp
private void ResetMaxUserDurationInSeconds()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetRootVolumeConfig` <a name="ResetRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetRootVolumeConfig"></a>

```csharp
private void ResetRootVolumeConfig()
```

##### `ResetSessionScriptS3Location` <a name="ResetSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetSessionScriptS3Location"></a>

```csharp
private void ResetSessionScriptS3Location()
```

##### `ResetStreamView` <a name="ResetStreamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetStreamView"></a>

```csharp
private void ResetStreamView()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUsbDeviceFilterStrings` <a name="ResetUsbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetUsbDeviceFilterStrings"></a>

```csharp
private void ResetUsbDeviceFilterStrings()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamFleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamFleet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppstreamFleet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamFleet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacity">ComputeCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfig">RootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference">AppstreamFleetRootVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3Location">SessionScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference">AppstreamFleetSessionScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList">AppstreamFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDeleteInput">AttributesToDeleteInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacityInput">ComputeCapacityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1Input">DisableImdsv1Input</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput">DisconnectTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput">DomainJoinInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput">EnableDefaultInternetAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetTypeInput">FleetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput">IdleDisconnectTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArnInput">ImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessionsInput">MaxConcurrentSessionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstanceInput">MaxSessionsPerInstanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput">MaxUserDurationInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfigInput">RootVolumeConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3LocationInput">SessionScriptS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamViewInput">StreamViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStringsInput">UsbDeviceFilterStringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDelete">AttributesToDelete</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1">DisableImdsv1</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds">DisconnectTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetType">FleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds">IdleDisconnectTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArn">ImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessions">MaxConcurrentSessions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstance">MaxSessionsPerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds">MaxUserDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamView">StreamView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStrings">UsbDeviceFilterStrings</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComputeCapacity`<sup>Required</sup> <a name="ComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacity"></a>

```csharp
public AppstreamFleetComputeCapacityOutputReference ComputeCapacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a>

---

##### `DomainJoinInfo`<sup>Required</sup> <a name="DomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfo"></a>

```csharp
public AppstreamFleetDomainJoinInfoOutputReference DomainJoinInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RootVolumeConfig`<sup>Required</sup> <a name="RootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfig"></a>

```csharp
public AppstreamFleetRootVolumeConfigOutputReference RootVolumeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference">AppstreamFleetRootVolumeConfigOutputReference</a>

---

##### `SessionScriptS3Location`<sup>Required</sup> <a name="SessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3Location"></a>

```csharp
public AppstreamFleetSessionScriptS3LocationOutputReference SessionScriptS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference">AppstreamFleetSessionScriptS3LocationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tags"></a>

```csharp
public AppstreamFleetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList">AppstreamFleetTagsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfig"></a>

```csharp
public AppstreamFleetVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a>

---

##### `AttributesToDeleteInput`<sup>Optional</sup> <a name="AttributesToDeleteInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDeleteInput"></a>

```csharp
public string[] AttributesToDeleteInput { get; }
```

- *Type:* string[]

---

##### `ComputeCapacityInput`<sup>Optional</sup> <a name="ComputeCapacityInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacityInput"></a>

```csharp
public IResolvable|AppstreamFleetComputeCapacity ComputeCapacityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableImdsv1Input`<sup>Optional</sup> <a name="DisableImdsv1Input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1Input"></a>

```csharp
public bool|IResolvable DisableImdsv1Input { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="DisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput"></a>

```csharp
public double DisconnectTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainJoinInfoInput`<sup>Optional</sup> <a name="DomainJoinInfoInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput"></a>

```csharp
public IResolvable|AppstreamFleetDomainJoinInfo DomainJoinInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---

##### `EnableDefaultInternetAccessInput`<sup>Optional</sup> <a name="EnableDefaultInternetAccessInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput"></a>

```csharp
public bool|IResolvable EnableDefaultInternetAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FleetTypeInput`<sup>Optional</sup> <a name="FleetTypeInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetTypeInput"></a>

```csharp
public string FleetTypeInput { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `IdleDisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput"></a>

```csharp
public double IdleDisconnectTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ImageArnInput`<sup>Optional</sup> <a name="ImageArnInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArnInput"></a>

```csharp
public string ImageArnInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `MaxConcurrentSessionsInput`<sup>Optional</sup> <a name="MaxConcurrentSessionsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessionsInput"></a>

```csharp
public double MaxConcurrentSessionsInput { get; }
```

- *Type:* double

---

##### `MaxSessionsPerInstanceInput`<sup>Optional</sup> <a name="MaxSessionsPerInstanceInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstanceInput"></a>

```csharp
public double MaxSessionsPerInstanceInput { get; }
```

- *Type:* double

---

##### `MaxUserDurationInSecondsInput`<sup>Optional</sup> <a name="MaxUserDurationInSecondsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput"></a>

```csharp
public double MaxUserDurationInSecondsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `RootVolumeConfigInput`<sup>Optional</sup> <a name="RootVolumeConfigInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfigInput"></a>

```csharp
public IResolvable|AppstreamFleetRootVolumeConfig RootVolumeConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---

##### `SessionScriptS3LocationInput`<sup>Optional</sup> <a name="SessionScriptS3LocationInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3LocationInput"></a>

```csharp
public IResolvable|AppstreamFleetSessionScriptS3Location SessionScriptS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---

##### `StreamViewInput`<sup>Optional</sup> <a name="StreamViewInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamViewInput"></a>

```csharp
public string StreamViewInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tagsInput"></a>

```csharp
public IResolvable|AppstreamFleetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]

---

##### `UsbDeviceFilterStringsInput`<sup>Optional</sup> <a name="UsbDeviceFilterStringsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStringsInput"></a>

```csharp
public string[] UsbDeviceFilterStringsInput { get; }
```

- *Type:* string[]

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfigInput"></a>

```csharp
public IResolvable|AppstreamFleetVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---

##### `AttributesToDelete`<sup>Required</sup> <a name="AttributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDelete"></a>

```csharp
public string[] AttributesToDelete { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableImdsv1`<sup>Required</sup> <a name="DisableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1"></a>

```csharp
public bool|IResolvable DisableImdsv1 { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisconnectTimeoutInSeconds`<sup>Required</sup> <a name="DisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds"></a>

```csharp
public double DisconnectTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableDefaultInternetAccess`<sup>Required</sup> <a name="EnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess"></a>

```csharp
public bool|IResolvable EnableDefaultInternetAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetType"></a>

```csharp
public string FleetType { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `IdleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="IdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds"></a>

```csharp
public double IdleDisconnectTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArn"></a>

```csharp
public string ImageArn { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `MaxConcurrentSessions`<sup>Required</sup> <a name="MaxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessions"></a>

```csharp
public double MaxConcurrentSessions { get; }
```

- *Type:* double

---

##### `MaxSessionsPerInstance`<sup>Required</sup> <a name="MaxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstance"></a>

```csharp
public double MaxSessionsPerInstance { get; }
```

- *Type:* double

---

##### `MaxUserDurationInSeconds`<sup>Required</sup> <a name="MaxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds"></a>

```csharp
public double MaxUserDurationInSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `StreamView`<sup>Required</sup> <a name="StreamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamView"></a>

```csharp
public string StreamView { get; }
```

- *Type:* string

---

##### `UsbDeviceFilterStrings`<sup>Required</sup> <a name="UsbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStrings"></a>

```csharp
public string[] UsbDeviceFilterStrings { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamFleetComputeCapacity <a name="AppstreamFleetComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetComputeCapacity {
    double DesiredInstances = null,
    double DesiredSessions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances">DesiredInstances</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredSessions">DesiredSessions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}. |

---

##### `DesiredInstances`<sup>Optional</sup> <a name="DesiredInstances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances"></a>

```csharp
public double DesiredInstances { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}.

---

##### `DesiredSessions`<sup>Optional</sup> <a name="DesiredSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredSessions"></a>

```csharp
public double DesiredSessions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}.

---

### AppstreamFleetConfig <a name="AppstreamFleetConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceType,
    string Name,
    string[] AttributesToDelete = null,
    AppstreamFleetComputeCapacity ComputeCapacity = null,
    string Description = null,
    bool|IResolvable DisableImdsv1 = null,
    double DisconnectTimeoutInSeconds = null,
    string DisplayName = null,
    AppstreamFleetDomainJoinInfo DomainJoinInfo = null,
    bool|IResolvable EnableDefaultInternetAccess = null,
    string FleetType = null,
    string IamRoleArn = null,
    double IdleDisconnectTimeoutInSeconds = null,
    string ImageArn = null,
    string ImageName = null,
    double MaxConcurrentSessions = null,
    double MaxSessionsPerInstance = null,
    double MaxUserDurationInSeconds = null,
    string Platform = null,
    AppstreamFleetRootVolumeConfig RootVolumeConfig = null,
    AppstreamFleetSessionScriptS3Location SessionScriptS3Location = null,
    string StreamView = null,
    IResolvable|AppstreamFleetTags[] Tags = null,
    string[] UsbDeviceFilterStrings = null,
    AppstreamFleetVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#name AppstreamFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.attributesToDelete">AttributesToDelete</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.computeCapacity">ComputeCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#description AppstreamFleet#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disableImdsv1">DisableImdsv1</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds">DisconnectTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo">DomainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess">EnableDefaultInternetAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.fleetType">FleetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds">IdleDisconnectTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageArn">ImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxConcurrentSessions">MaxConcurrentSessions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxSessionsPerInstance">MaxSessionsPerInstance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds">MaxUserDurationInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.platform">Platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.rootVolumeConfig">RootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.sessionScriptS3Location">SessionScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.streamView">StreamView</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.usbDeviceFilterStrings">UsbDeviceFilterStrings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#name AppstreamFleet#name}.

---

##### `AttributesToDelete`<sup>Optional</sup> <a name="AttributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.attributesToDelete"></a>

```csharp
public string[] AttributesToDelete { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}.

---

##### `ComputeCapacity`<sup>Optional</sup> <a name="ComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.computeCapacity"></a>

```csharp
public AppstreamFleetComputeCapacity ComputeCapacity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#description AppstreamFleet#description}.

---

##### `DisableImdsv1`<sup>Optional</sup> <a name="DisableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disableImdsv1"></a>

```csharp
public bool|IResolvable DisableImdsv1 { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}.

---

##### `DisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="DisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds"></a>

```csharp
public double DisconnectTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}.

---

##### `DomainJoinInfo`<sup>Optional</sup> <a name="DomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo"></a>

```csharp
public AppstreamFleetDomainJoinInfo DomainJoinInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}.

---

##### `EnableDefaultInternetAccess`<sup>Optional</sup> <a name="EnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess"></a>

```csharp
public bool|IResolvable EnableDefaultInternetAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}.

---

##### `FleetType`<sup>Optional</sup> <a name="FleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.fleetType"></a>

```csharp
public string FleetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}.

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}.

---

##### `IdleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds"></a>

```csharp
public double IdleDisconnectTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}.

---

##### `ImageArn`<sup>Optional</sup> <a name="ImageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageArn"></a>

```csharp
public string ImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}.

---

##### `MaxConcurrentSessions`<sup>Optional</sup> <a name="MaxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxConcurrentSessions"></a>

```csharp
public double MaxConcurrentSessions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}.

---

##### `MaxSessionsPerInstance`<sup>Optional</sup> <a name="MaxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxSessionsPerInstance"></a>

```csharp
public double MaxSessionsPerInstance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}.

---

##### `MaxUserDurationInSeconds`<sup>Optional</sup> <a name="MaxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds"></a>

```csharp
public double MaxUserDurationInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}.

---

##### `RootVolumeConfig`<sup>Optional</sup> <a name="RootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.rootVolumeConfig"></a>

```csharp
public AppstreamFleetRootVolumeConfig RootVolumeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}.

---

##### `SessionScriptS3Location`<sup>Optional</sup> <a name="SessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.sessionScriptS3Location"></a>

```csharp
public AppstreamFleetSessionScriptS3Location SessionScriptS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}.

---

##### `StreamView`<sup>Optional</sup> <a name="StreamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.streamView"></a>

```csharp
public string StreamView { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.tags"></a>

```csharp
public IResolvable|AppstreamFleetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}.

---

##### `UsbDeviceFilterStrings`<sup>Optional</sup> <a name="UsbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.usbDeviceFilterStrings"></a>

```csharp
public string[] UsbDeviceFilterStrings { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.vpcConfig"></a>

```csharp
public AppstreamFleetVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}.

---

### AppstreamFleetDomainJoinInfo <a name="AppstreamFleetDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetDomainJoinInfo {
    string DirectoryName = null,
    string OrganizationalUnitDistinguishedName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName">DirectoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}. |

---

##### `DirectoryName`<sup>Optional</sup> <a name="DirectoryName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName"></a>

```csharp
public string DirectoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}.

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}.

---

### AppstreamFleetRootVolumeConfig <a name="AppstreamFleetRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetRootVolumeConfig {
    double VolumeSizeInGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}. |

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}.

---

### AppstreamFleetSessionScriptS3Location <a name="AppstreamFleetSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetSessionScriptS3Location {
    string S3Bucket = null,
    string S3Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}. |

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}.

---

### AppstreamFleetTags <a name="AppstreamFleetTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#key AppstreamFleet#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#value AppstreamFleet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#key AppstreamFleet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#value AppstreamFleet#value}.

---

### AppstreamFleetVpcConfig <a name="AppstreamFleetVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetVpcConfig {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamFleetComputeCapacityOutputReference <a name="AppstreamFleetComputeCapacityOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetComputeCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredInstances">ResetDesiredInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredSessions">ResetDesiredSessions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDesiredInstances` <a name="ResetDesiredInstances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredInstances"></a>

```csharp
private void ResetDesiredInstances()
```

##### `ResetDesiredSessions` <a name="ResetDesiredSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredSessions"></a>

```csharp
private void ResetDesiredSessions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput">DesiredInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessionsInput">DesiredSessionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances">DesiredInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessions">DesiredSessions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DesiredInstancesInput`<sup>Optional</sup> <a name="DesiredInstancesInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput"></a>

```csharp
public double DesiredInstancesInput { get; }
```

- *Type:* double

---

##### `DesiredSessionsInput`<sup>Optional</sup> <a name="DesiredSessionsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessionsInput"></a>

```csharp
public double DesiredSessionsInput { get; }
```

- *Type:* double

---

##### `DesiredInstances`<sup>Required</sup> <a name="DesiredInstances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances"></a>

```csharp
public double DesiredInstances { get; }
```

- *Type:* double

---

##### `DesiredSessions`<sup>Required</sup> <a name="DesiredSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessions"></a>

```csharp
public double DesiredSessions { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamFleetComputeCapacity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---


### AppstreamFleetDomainJoinInfoOutputReference <a name="AppstreamFleetDomainJoinInfoOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetDomainJoinInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName">ResetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">ResetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectoryName` <a name="ResetDirectoryName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName"></a>

```csharp
private void ResetDirectoryName()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```csharp
private void ResetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput">DirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName">DirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryNameInput`<sup>Optional</sup> <a name="DirectoryNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```csharp
public string DirectoryNameInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```csharp
public string OrganizationalUnitDistinguishedNameInput { get; }
```

- *Type:* string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName"></a>

```csharp
public string DirectoryName { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamFleetDomainJoinInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---


### AppstreamFleetRootVolumeConfigOutputReference <a name="AppstreamFleetRootVolumeConfigOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetRootVolumeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```csharp
private void ResetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```csharp
public double VolumeSizeInGbInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamFleetRootVolumeConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---


### AppstreamFleetSessionScriptS3LocationOutputReference <a name="AppstreamFleetSessionScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetSessionScriptS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamFleetSessionScriptS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---


### AppstreamFleetTagsList <a name="AppstreamFleetTagsList" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get"></a>

```csharp
private AppstreamFleetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamFleetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]

---


### AppstreamFleetTagsOutputReference <a name="AppstreamFleetTagsOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamFleetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>

---


### AppstreamFleetVpcConfigOutputReference <a name="AppstreamFleetVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamFleetVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamFleetVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---



