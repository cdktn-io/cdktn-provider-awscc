# `apigatewayStage` Submodule <a name="`apigatewayStage` Submodule" id="@cdktn/provider-awscc.apigatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayStage <a name="ApigatewayStage" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage awscc_apigateway_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStage(Construct Scope, string Id, ApigatewayStageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig">ApigatewayStageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig">ApigatewayStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting">PutAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting">PutCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putMethodSettings">PutMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetAccessLogSetting">ResetAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterEnabled">ResetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterSize">ResetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCanarySetting">ResetCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetClientCertificateId">ResetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDocumentationVersion">ResetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetMethodSettings">ResetMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetStageName">ResetStageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTracingEnabled">ResetTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessLogSetting` <a name="PutAccessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting"></a>

```csharp
private void PutAccessLogSetting(ApigatewayStageAccessLogSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putAccessLogSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

---

##### `PutCanarySetting` <a name="PutCanarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting"></a>

```csharp
private void PutCanarySetting(ApigatewayStageCanarySetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putCanarySetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

---

##### `PutMethodSettings` <a name="PutMethodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putMethodSettings"></a>

```csharp
private void PutMethodSettings(IResolvable|ApigatewayStageMethodSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putMethodSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putTags"></a>

```csharp
private void PutTags(IResolvable|ApigatewayStageTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]

---

##### `ResetAccessLogSetting` <a name="ResetAccessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetAccessLogSetting"></a>

```csharp
private void ResetAccessLogSetting()
```

##### `ResetCacheClusterEnabled` <a name="ResetCacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterEnabled"></a>

```csharp
private void ResetCacheClusterEnabled()
```

##### `ResetCacheClusterSize` <a name="ResetCacheClusterSize" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCacheClusterSize"></a>

```csharp
private void ResetCacheClusterSize()
```

##### `ResetCanarySetting` <a name="ResetCanarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetCanarySetting"></a>

```csharp
private void ResetCanarySetting()
```

##### `ResetClientCertificateId` <a name="ResetClientCertificateId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetClientCertificateId"></a>

```csharp
private void ResetClientCertificateId()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentationVersion` <a name="ResetDocumentationVersion" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetDocumentationVersion"></a>

```csharp
private void ResetDocumentationVersion()
```

##### `ResetMethodSettings` <a name="ResetMethodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetMethodSettings"></a>

```csharp
private void ResetMethodSettings()
```

##### `ResetStageName` <a name="ResetStageName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetStageName"></a>

```csharp
private void ResetStageName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTracingEnabled` <a name="ResetTracingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetTracingEnabled"></a>

```csharp
private void ResetTracingEnabled()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.resetVariables"></a>

```csharp
private void ResetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayStage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayStage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayStage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayStage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayStage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigatewayStage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayStage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSetting">AccessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference">ApigatewayStageAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySetting">CanarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference">ApigatewayStageCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettings">MethodSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList">ApigatewayStageMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList">ApigatewayStageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSettingInput">AccessLogSettingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabledInput">CacheClusterEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSizeInput">CacheClusterSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySettingInput">CanarySettingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateIdInput">ClientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersionInput">DocumentationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettingsInput">MethodSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageNameInput">StageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabledInput">TracingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variablesInput">VariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabled">CacheClusterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSize">CacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersion">DocumentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabled">TracingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessLogSetting`<sup>Required</sup> <a name="AccessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSetting"></a>

```csharp
public ApigatewayStageAccessLogSettingOutputReference AccessLogSetting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference">ApigatewayStageAccessLogSettingOutputReference</a>

---

##### `CanarySetting`<sup>Required</sup> <a name="CanarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySetting"></a>

```csharp
public ApigatewayStageCanarySettingOutputReference CanarySetting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference">ApigatewayStageCanarySettingOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MethodSettings`<sup>Required</sup> <a name="MethodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettings"></a>

```csharp
public ApigatewayStageMethodSettingsList MethodSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList">ApigatewayStageMethodSettingsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tags"></a>

```csharp
public ApigatewayStageTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList">ApigatewayStageTagsList</a>

---

##### `AccessLogSettingInput`<sup>Optional</sup> <a name="AccessLogSettingInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.accessLogSettingInput"></a>

```csharp
public IResolvable|ApigatewayStageAccessLogSetting AccessLogSettingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

---

##### `CacheClusterEnabledInput`<sup>Optional</sup> <a name="CacheClusterEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabledInput"></a>

```csharp
public bool|IResolvable CacheClusterEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheClusterSizeInput`<sup>Optional</sup> <a name="CacheClusterSizeInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSizeInput"></a>

```csharp
public string CacheClusterSizeInput { get; }
```

- *Type:* string

---

##### `CanarySettingInput`<sup>Optional</sup> <a name="CanarySettingInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.canarySettingInput"></a>

```csharp
public IResolvable|ApigatewayStageCanarySetting CanarySettingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

---

##### `ClientCertificateIdInput`<sup>Optional</sup> <a name="ClientCertificateIdInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateIdInput"></a>

```csharp
public string ClientCertificateIdInput { get; }
```

- *Type:* string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DocumentationVersionInput`<sup>Optional</sup> <a name="DocumentationVersionInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersionInput"></a>

```csharp
public string DocumentationVersionInput { get; }
```

- *Type:* string

---

##### `MethodSettingsInput`<sup>Optional</sup> <a name="MethodSettingsInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.methodSettingsInput"></a>

```csharp
public IResolvable|ApigatewayStageMethodSettings[] MethodSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageNameInput"></a>

```csharp
public string StageNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tagsInput"></a>

```csharp
public IResolvable|ApigatewayStageTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]

---

##### `TracingEnabledInput`<sup>Optional</sup> <a name="TracingEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabledInput"></a>

```csharp
public bool|IResolvable TracingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CacheClusterEnabled`<sup>Required</sup> <a name="CacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterEnabled"></a>

```csharp
public bool|IResolvable CacheClusterEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheClusterSize`<sup>Required</sup> <a name="CacheClusterSize" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.cacheClusterSize"></a>

```csharp
public string CacheClusterSize { get; }
```

- *Type:* string

---

##### `ClientCertificateId`<sup>Required</sup> <a name="ClientCertificateId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DocumentationVersion`<sup>Required</sup> <a name="DocumentationVersion" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.documentationVersion"></a>

```csharp
public string DocumentationVersion { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

##### `TracingEnabled`<sup>Required</sup> <a name="TracingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tracingEnabled"></a>

```csharp
public bool|IResolvable TracingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayStageAccessLogSetting <a name="ApigatewayStageAccessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageAccessLogSetting {
    string DestinationArn = null,
    string Format = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.destinationArn">DestinationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.format">Format</a></code> | <code>string</code> | A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging. |

---

##### `DestinationArn`<sup>Optional</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs.

If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with `amazon-apigateway-`. This parameter is required to enable access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#destination_arn ApigatewayStage#destination_arn}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#format ApigatewayStage#format}

---

### ApigatewayStageCanarySetting <a name="ApigatewayStageCanarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageCanarySetting {
    string DeploymentId = null,
    double PercentTraffic = null,
    System.Collections.Generic.IDictionary<string, string> StageVariableOverrides = null,
    bool|IResolvable UseStageCache = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#percent_traffic ApigatewayStage#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#stage_variable_overrides ApigatewayStage#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.useStageCache">UseStageCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#use_stage_cache ApigatewayStage#use_stage_cache}. |

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}.

---

##### `PercentTraffic`<sup>Optional</sup> <a name="PercentTraffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#percent_traffic ApigatewayStage#percent_traffic}.

---

##### `StageVariableOverrides`<sup>Optional</sup> <a name="StageVariableOverrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#stage_variable_overrides ApigatewayStage#stage_variable_overrides}.

---

##### `UseStageCache`<sup>Optional</sup> <a name="UseStageCache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting.property.useStageCache"></a>

```csharp
public bool|IResolvable UseStageCache { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#use_stage_cache ApigatewayStage#use_stage_cache}.

---

### ApigatewayStageConfig <a name="ApigatewayStageConfig" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RestApiId,
    ApigatewayStageAccessLogSetting AccessLogSetting = null,
    bool|IResolvable CacheClusterEnabled = null,
    string CacheClusterSize = null,
    ApigatewayStageCanarySetting CanarySetting = null,
    string ClientCertificateId = null,
    string DeploymentId = null,
    string Description = null,
    string DocumentationVersion = null,
    IResolvable|ApigatewayStageMethodSettings[] MethodSettings = null,
    string StageName = null,
    IResolvable|ApigatewayStageTags[] Tags = null,
    bool|IResolvable TracingEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#rest_api_id ApigatewayStage#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.accessLogSetting">AccessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | The ``AccessLogSetting`` property type specifies settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterEnabled">CacheClusterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_cluster_enabled ApigatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterSize">CacheClusterSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_cluster_size ApigatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.canarySetting">CanarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#canary_setting ApigatewayStage#canary_setting}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#client_certificate_id ApigatewayStage#client_certificate_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#description ApigatewayStage#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.documentationVersion">DocumentationVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#documentation_version ApigatewayStage#documentation_version}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.methodSettings">MethodSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#method_settings ApigatewayStage#method_settings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.stageName">StageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#stage_name ApigatewayStage#stage_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#tags ApigatewayStage#tags}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tracingEnabled">TracingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#tracing_enabled ApigatewayStage#tracing_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#rest_api_id ApigatewayStage#rest_api_id}.

---

##### `AccessLogSetting`<sup>Optional</sup> <a name="AccessLogSetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.accessLogSetting"></a>

```csharp
public ApigatewayStageAccessLogSetting AccessLogSetting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

The ``AccessLogSetting`` property type specifies settings for logging access in this stage.

`AccessLogSetting` is a property of the [AWS::ApiGateway::Stage](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html) resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#access_log_setting ApigatewayStage#access_log_setting}

---

##### `CacheClusterEnabled`<sup>Optional</sup> <a name="CacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterEnabled"></a>

```csharp
public bool|IResolvable CacheClusterEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_cluster_enabled ApigatewayStage#cache_cluster_enabled}.

---

##### `CacheClusterSize`<sup>Optional</sup> <a name="CacheClusterSize" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.cacheClusterSize"></a>

```csharp
public string CacheClusterSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_cluster_size ApigatewayStage#cache_cluster_size}.

---

##### `CanarySetting`<sup>Optional</sup> <a name="CanarySetting" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.canarySetting"></a>

```csharp
public ApigatewayStageCanarySetting CanarySetting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#canary_setting ApigatewayStage#canary_setting}.

---

##### `ClientCertificateId`<sup>Optional</sup> <a name="ClientCertificateId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#client_certificate_id ApigatewayStage#client_certificate_id}.

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#deployment_id ApigatewayStage#deployment_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#description ApigatewayStage#description}.

---

##### `DocumentationVersion`<sup>Optional</sup> <a name="DocumentationVersion" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.documentationVersion"></a>

```csharp
public string DocumentationVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#documentation_version ApigatewayStage#documentation_version}.

---

##### `MethodSettings`<sup>Optional</sup> <a name="MethodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.methodSettings"></a>

```csharp
public IResolvable|ApigatewayStageMethodSettings[] MethodSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#method_settings ApigatewayStage#method_settings}.

---

##### `StageName`<sup>Optional</sup> <a name="StageName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.stageName"></a>

```csharp
public string StageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#stage_name ApigatewayStage#stage_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tags"></a>

```csharp
public IResolvable|ApigatewayStageTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#tags ApigatewayStage#tags}.

---

##### `TracingEnabled`<sup>Optional</sup> <a name="TracingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.tracingEnabled"></a>

```csharp
public bool|IResolvable TracingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#tracing_enabled ApigatewayStage#tracing_enabled}.

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageConfig.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value.

Variable names are limited to alphanumeric characters. Values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#variables ApigatewayStage#variables}

---

### ApigatewayStageMethodSettings <a name="ApigatewayStageMethodSettings" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageMethodSettings {
    bool|IResolvable CacheDataEncrypted = null,
    double CacheTtlInSeconds = null,
    bool|IResolvable CachingEnabled = null,
    bool|IResolvable DataTraceEnabled = null,
    string HttpMethod = null,
    string LoggingLevel = null,
    bool|IResolvable MetricsEnabled = null,
    string ResourcePath = null,
    double ThrottlingBurstLimit = null,
    double ThrottlingRateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_data_encrypted ApigatewayStage#cache_data_encrypted}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_ttl_in_seconds ApigatewayStage#cache_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cachingEnabled">CachingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#caching_enabled ApigatewayStage#caching_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#data_trace_enabled ApigatewayStage#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.httpMethod">HttpMethod</a></code> | <code>string</code> | The HTTP method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#logging_level ApigatewayStage#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.metricsEnabled">MetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#metrics_enabled ApigatewayStage#metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.resourcePath">ResourcePath</a></code> | <code>string</code> | The resource path for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#throttling_burst_limit ApigatewayStage#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#throttling_rate_limit ApigatewayStage#throttling_rate_limit}. |

---

##### `CacheDataEncrypted`<sup>Optional</sup> <a name="CacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheDataEncrypted"></a>

```csharp
public bool|IResolvable CacheDataEncrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_data_encrypted ApigatewayStage#cache_data_encrypted}.

---

##### `CacheTtlInSeconds`<sup>Optional</sup> <a name="CacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#cache_ttl_in_seconds ApigatewayStage#cache_ttl_in_seconds}.

---

##### `CachingEnabled`<sup>Optional</sup> <a name="CachingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.cachingEnabled"></a>

```csharp
public bool|IResolvable CachingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#caching_enabled ApigatewayStage#caching_enabled}.

---

##### `DataTraceEnabled`<sup>Optional</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.dataTraceEnabled"></a>

```csharp
public bool|IResolvable DataTraceEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#data_trace_enabled ApigatewayStage#data_trace_enabled}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

The HTTP method.

To apply settings to multiple resources and methods, specify an asterisk (`*`) for the `HttpMethod` and `/*` for the `ResourcePath`. This parameter is required when you specify a `MethodSetting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#http_method ApigatewayStage#http_method}

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#logging_level ApigatewayStage#logging_level}.

---

##### `MetricsEnabled`<sup>Optional</sup> <a name="MetricsEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.metricsEnabled"></a>

```csharp
public bool|IResolvable MetricsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#metrics_enabled ApigatewayStage#metrics_enabled}.

---

##### `ResourcePath`<sup>Optional</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.resourcePath"></a>

```csharp
public string ResourcePath { get; set; }
```

- *Type:* string

The resource path for this method.

Forward slashes (`/`) are encoded as `~1` and the initial slash must include a forward slash. For example, the path value `/resource/subresource` must be encoded as `/~1resource~1subresource`. To specify the root path, use only a slash (`/`). To apply settings to multiple resources and methods, specify an asterisk (`*`) for the `HttpMethod` and `/*` for the `ResourcePath`. This parameter is required when you specify a `MethodSetting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#resource_path ApigatewayStage#resource_path}

---

##### `ThrottlingBurstLimit`<sup>Optional</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#throttling_burst_limit ApigatewayStage#throttling_burst_limit}.

---

##### `ThrottlingRateLimit`<sup>Optional</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#throttling_rate_limit ApigatewayStage#throttling_rate_limit}.

---

### ApigatewayStageTags <a name="ApigatewayStageTags" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.key">Key</a></code> | <code>string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.value">Value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#key ApigatewayStage#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_stage#value ApigatewayStage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayStageAccessLogSettingOutputReference <a name="ApigatewayStageAccessLogSettingOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageAccessLogSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetDestinationArn">ResetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationArn` <a name="ResetDestinationArn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetDestinationArn"></a>

```csharp
private void ResetDestinationArn()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSettingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayStageAccessLogSetting InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageAccessLogSetting">ApigatewayStageAccessLogSetting</a>

---


### ApigatewayStageCanarySettingOutputReference <a name="ApigatewayStageCanarySettingOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageCanarySettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetPercentTraffic">ResetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetStageVariableOverrides">ResetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetUseStageCache">ResetUseStageCache</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetPercentTraffic` <a name="ResetPercentTraffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetPercentTraffic"></a>

```csharp
private void ResetPercentTraffic()
```

##### `ResetStageVariableOverrides` <a name="ResetStageVariableOverrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetStageVariableOverrides"></a>

```csharp
private void ResetStageVariableOverrides()
```

##### `ResetUseStageCache` <a name="ResetUseStageCache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.resetUseStageCache"></a>

```csharp
private void ResetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTrafficInput">PercentTrafficInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverridesInput">StageVariableOverridesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCacheInput">UseStageCacheInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCache">UseStageCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `PercentTrafficInput`<sup>Optional</sup> <a name="PercentTrafficInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTrafficInput"></a>

```csharp
public double PercentTrafficInput { get; }
```

- *Type:* double

---

##### `StageVariableOverridesInput`<sup>Optional</sup> <a name="StageVariableOverridesInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverridesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverridesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCacheInput`<sup>Optional</sup> <a name="UseStageCacheInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCacheInput"></a>

```csharp
public bool|IResolvable UseStageCacheInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `PercentTraffic`<sup>Required</sup> <a name="PercentTraffic" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; }
```

- *Type:* double

---

##### `StageVariableOverrides`<sup>Required</sup> <a name="StageVariableOverrides" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCache`<sup>Required</sup> <a name="UseStageCache" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.useStageCache"></a>

```csharp
public bool|IResolvable UseStageCache { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySettingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayStageCanarySetting InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageCanarySetting">ApigatewayStageCanarySetting</a>

---


### ApigatewayStageMethodSettingsList <a name="ApigatewayStageMethodSettingsList" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageMethodSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.get"></a>

```csharp
private ApigatewayStageMethodSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayStageMethodSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>[]

---


### ApigatewayStageMethodSettingsOutputReference <a name="ApigatewayStageMethodSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageMethodSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheDataEncrypted">ResetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheTtlInSeconds">ResetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCachingEnabled">ResetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetDataTraceEnabled">ResetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetMetricsEnabled">ResetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetResourcePath">ResetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingBurstLimit">ResetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingRateLimit">ResetThrottlingRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheDataEncrypted` <a name="ResetCacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheDataEncrypted"></a>

```csharp
private void ResetCacheDataEncrypted()
```

##### `ResetCacheTtlInSeconds` <a name="ResetCacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCacheTtlInSeconds"></a>

```csharp
private void ResetCacheTtlInSeconds()
```

##### `ResetCachingEnabled` <a name="ResetCachingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetCachingEnabled"></a>

```csharp
private void ResetCachingEnabled()
```

##### `ResetDataTraceEnabled` <a name="ResetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetDataTraceEnabled"></a>

```csharp
private void ResetDataTraceEnabled()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetMetricsEnabled` <a name="ResetMetricsEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetMetricsEnabled"></a>

```csharp
private void ResetMetricsEnabled()
```

##### `ResetResourcePath` <a name="ResetResourcePath" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetResourcePath"></a>

```csharp
private void ResetResourcePath()
```

##### `ResetThrottlingBurstLimit` <a name="ResetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingBurstLimit"></a>

```csharp
private void ResetThrottlingBurstLimit()
```

##### `ResetThrottlingRateLimit` <a name="ResetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.resetThrottlingRateLimit"></a>

```csharp
private void ResetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncryptedInput">CacheDataEncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSecondsInput">CacheTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabledInput">CachingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabledInput">DataTraceEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabledInput">MetricsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePathInput">ResourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimitInput">ThrottlingBurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimitInput">ThrottlingRateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabled">CachingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePath">ResourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheDataEncryptedInput`<sup>Optional</sup> <a name="CacheDataEncryptedInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```csharp
public bool|IResolvable CacheDataEncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheTtlInSecondsInput`<sup>Optional</sup> <a name="CacheTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```csharp
public double CacheTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `CachingEnabledInput`<sup>Optional</sup> <a name="CachingEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabledInput"></a>

```csharp
public bool|IResolvable CachingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataTraceEnabledInput`<sup>Optional</sup> <a name="DataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabledInput"></a>

```csharp
public bool|IResolvable DataTraceEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `MetricsEnabledInput`<sup>Optional</sup> <a name="MetricsEnabledInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabledInput"></a>

```csharp
public bool|IResolvable MetricsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourcePathInput`<sup>Optional</sup> <a name="ResourcePathInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePathInput"></a>

```csharp
public string ResourcePathInput { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimitInput`<sup>Optional</sup> <a name="ThrottlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```csharp
public double ThrottlingBurstLimitInput { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimitInput`<sup>Optional</sup> <a name="ThrottlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimitInput"></a>

```csharp
public double ThrottlingRateLimitInput { get; }
```

- *Type:* double

---

##### `CacheDataEncrypted`<sup>Required</sup> <a name="CacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```csharp
public bool|IResolvable CacheDataEncrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheTtlInSeconds`<sup>Required</sup> <a name="CacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; }
```

- *Type:* double

---

##### `CachingEnabled`<sup>Required</sup> <a name="CachingEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.cachingEnabled"></a>

```csharp
public bool|IResolvable CachingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```csharp
public bool|IResolvable DataTraceEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.metricsEnabled"></a>

```csharp
public bool|IResolvable MetricsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.resourcePath"></a>

```csharp
public string ResourcePath { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayStageMethodSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageMethodSettings">ApigatewayStageMethodSettings</a>

---


### ApigatewayStageTagsList <a name="ApigatewayStageTagsList" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.get"></a>

```csharp
private ApigatewayStageTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayStageTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>[]

---


### ApigatewayStageTagsOutputReference <a name="ApigatewayStageTagsOutputReference" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayStageTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayStageTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayStage.ApigatewayStageTags">ApigatewayStageTags</a>

---



