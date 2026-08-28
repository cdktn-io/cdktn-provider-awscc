# `appsyncResolver` Submodule <a name="`appsyncResolver` Submodule" id="@cdktn/provider-awscc.appsyncResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncResolver <a name="AppsyncResolver" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver awscc_appsync_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolver(Construct Scope, string Id, AppsyncResolverConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig">AppsyncResolverConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig">AppsyncResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig">PutCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putPipelineConfig">PutPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime">PutRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig">PutSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCachingConfig">ResetCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCodeS3Location">ResetCodeS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetDataSourceName">ResetDataSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMaxBatchSize">ResetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetPipelineConfig">ResetPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplate">ResetRequestMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplateS3Location">ResetRequestMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplate">ResetResponseMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplateS3Location">ResetResponseMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetSyncConfig">ResetSyncConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCachingConfig` <a name="PutCachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig"></a>

```csharp
private void PutCachingConfig(AppsyncResolverCachingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putCachingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `PutPipelineConfig` <a name="PutPipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putPipelineConfig"></a>

```csharp
private void PutPipelineConfig(AppsyncResolverPipelineConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putPipelineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `PutRuntime` <a name="PutRuntime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime"></a>

```csharp
private void PutRuntime(AppsyncResolverRuntime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---

##### `PutSyncConfig` <a name="PutSyncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig"></a>

```csharp
private void PutSyncConfig(AppsyncResolverSyncConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `ResetCachingConfig` <a name="ResetCachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCachingConfig"></a>

```csharp
private void ResetCachingConfig()
```

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetCodeS3Location` <a name="ResetCodeS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetCodeS3Location"></a>

```csharp
private void ResetCodeS3Location()
```

##### `ResetDataSourceName` <a name="ResetDataSourceName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetDataSourceName"></a>

```csharp
private void ResetDataSourceName()
```

##### `ResetKind` <a name="ResetKind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetMaxBatchSize` <a name="ResetMaxBatchSize" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMaxBatchSize"></a>

```csharp
private void ResetMaxBatchSize()
```

##### `ResetMetricsConfig` <a name="ResetMetricsConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetMetricsConfig"></a>

```csharp
private void ResetMetricsConfig()
```

##### `ResetPipelineConfig` <a name="ResetPipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetPipelineConfig"></a>

```csharp
private void ResetPipelineConfig()
```

##### `ResetRequestMappingTemplate` <a name="ResetRequestMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplate"></a>

```csharp
private void ResetRequestMappingTemplate()
```

##### `ResetRequestMappingTemplateS3Location` <a name="ResetRequestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRequestMappingTemplateS3Location"></a>

```csharp
private void ResetRequestMappingTemplateS3Location()
```

##### `ResetResponseMappingTemplate` <a name="ResetResponseMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplate"></a>

```csharp
private void ResetResponseMappingTemplate()
```

##### `ResetResponseMappingTemplateS3Location` <a name="ResetResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetResponseMappingTemplateS3Location"></a>

```csharp
private void ResetResponseMappingTemplateS3Location()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetSyncConfig` <a name="ResetSyncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.resetSyncConfig"></a>

```csharp
private void ResetSyncConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncResolver resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncResolver.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncResolver.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncResolver.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncResolver.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppsyncResolver resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncResolver to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfig">CachingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfig">PipelineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.resolverArn">ResolverArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtime">Runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfigInput">CachingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3LocationInput">CodeS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceNameInput">DataSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput">MaxBatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfigInput">MetricsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfigInput">PipelineConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateInput">RequestMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3LocationInput">RequestMappingTemplateS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateInput">ResponseMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3LocationInput">ResponseMappingTemplateS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtimeInput">RuntimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfigInput">SyncConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3Location">CodeS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceName">DataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSize">MaxBatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfig">MetricsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplate">RequestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3Location">RequestMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplate">ResponseMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3Location">ResponseMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CachingConfig`<sup>Required</sup> <a name="CachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfig"></a>

```csharp
public AppsyncResolverCachingConfigOutputReference CachingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference">AppsyncResolverCachingConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PipelineConfig`<sup>Required</sup> <a name="PipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfig"></a>

```csharp
public AppsyncResolverPipelineConfigOutputReference PipelineConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference">AppsyncResolverPipelineConfigOutputReference</a>

---

##### `ResolverArn`<sup>Required</sup> <a name="ResolverArn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.resolverArn"></a>

```csharp
public string ResolverArn { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtime"></a>

```csharp
public AppsyncResolverRuntimeOutputReference Runtime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference">AppsyncResolverRuntimeOutputReference</a>

---

##### `SyncConfig`<sup>Required</sup> <a name="SyncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfig"></a>

```csharp
public AppsyncResolverSyncConfigOutputReference SyncConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference">AppsyncResolverSyncConfigOutputReference</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `CachingConfigInput`<sup>Optional</sup> <a name="CachingConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.cachingConfigInput"></a>

```csharp
public IResolvable|AppsyncResolverCachingConfig CachingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `CodeS3LocationInput`<sup>Optional</sup> <a name="CodeS3LocationInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3LocationInput"></a>

```csharp
public string CodeS3LocationInput { get; }
```

- *Type:* string

---

##### `DataSourceNameInput`<sup>Optional</sup> <a name="DataSourceNameInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceNameInput"></a>

```csharp
public string DataSourceNameInput { get; }
```

- *Type:* string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `MaxBatchSizeInput`<sup>Optional</sup> <a name="MaxBatchSizeInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSizeInput"></a>

```csharp
public double MaxBatchSizeInput { get; }
```

- *Type:* double

---

##### `MetricsConfigInput`<sup>Optional</sup> <a name="MetricsConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfigInput"></a>

```csharp
public string MetricsConfigInput { get; }
```

- *Type:* string

---

##### `PipelineConfigInput`<sup>Optional</sup> <a name="PipelineConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.pipelineConfigInput"></a>

```csharp
public IResolvable|AppsyncResolverPipelineConfig PipelineConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---

##### `RequestMappingTemplateInput`<sup>Optional</sup> <a name="RequestMappingTemplateInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateInput"></a>

```csharp
public string RequestMappingTemplateInput { get; }
```

- *Type:* string

---

##### `RequestMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="RequestMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3LocationInput"></a>

```csharp
public string RequestMappingTemplateS3LocationInput { get; }
```

- *Type:* string

---

##### `ResponseMappingTemplateInput`<sup>Optional</sup> <a name="ResponseMappingTemplateInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateInput"></a>

```csharp
public string ResponseMappingTemplateInput { get; }
```

- *Type:* string

---

##### `ResponseMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="ResponseMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3LocationInput"></a>

```csharp
public string ResponseMappingTemplateS3LocationInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.runtimeInput"></a>

```csharp
public IResolvable|AppsyncResolverRuntime RuntimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---

##### `SyncConfigInput`<sup>Optional</sup> <a name="SyncConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.syncConfigInput"></a>

```csharp
public IResolvable|AppsyncResolverSyncConfig SyncConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `CodeS3Location`<sup>Required</sup> <a name="CodeS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.codeS3Location"></a>

```csharp
public string CodeS3Location { get; }
```

- *Type:* string

---

##### `DataSourceName`<sup>Required</sup> <a name="DataSourceName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.dataSourceName"></a>

```csharp
public string DataSourceName { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `MaxBatchSize`<sup>Required</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.maxBatchSize"></a>

```csharp
public double MaxBatchSize { get; }
```

- *Type:* double

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.metricsConfig"></a>

```csharp
public string MetricsConfig { get; }
```

- *Type:* string

---

##### `RequestMappingTemplate`<sup>Required</sup> <a name="RequestMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplate"></a>

```csharp
public string RequestMappingTemplate { get; }
```

- *Type:* string

---

##### `RequestMappingTemplateS3Location`<sup>Required</sup> <a name="RequestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.requestMappingTemplateS3Location"></a>

```csharp
public string RequestMappingTemplateS3Location { get; }
```

- *Type:* string

---

##### `ResponseMappingTemplate`<sup>Required</sup> <a name="ResponseMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplate"></a>

```csharp
public string ResponseMappingTemplate { get; }
```

- *Type:* string

---

##### `ResponseMappingTemplateS3Location`<sup>Required</sup> <a name="ResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.responseMappingTemplateS3Location"></a>

```csharp
public string ResponseMappingTemplateS3Location { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolver.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncResolverCachingConfig <a name="AppsyncResolverCachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverCachingConfig {
    string[] CachingKeys = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys">CachingKeys</a></code> | <code>string[]</code> | The caching keys for a resolver that has caching activated. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.ttl">Ttl</a></code> | <code>double</code> | The TTL in seconds for a resolver that has caching activated.  Valid values are 1?3,600 seconds. |

---

##### `CachingKeys`<sup>Optional</sup> <a name="CachingKeys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.cachingKeys"></a>

```csharp
public string[] CachingKeys { get; set; }
```

- *Type:* string[]

The caching keys for a resolver that has caching activated.

Valid values are entries from the `$context.arguments`, `$context.source`, and `$context.identity` maps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#caching_keys AppsyncResolver#caching_keys}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The TTL in seconds for a resolver that has caching activated.  Valid values are 1?3,600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#ttl AppsyncResolver#ttl}

---

### AppsyncResolverConfig <a name="AppsyncResolverConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiId,
    string FieldName,
    string TypeName,
    AppsyncResolverCachingConfig CachingConfig = null,
    string Code = null,
    string CodeS3Location = null,
    string DataSourceName = null,
    string Kind = null,
    double MaxBatchSize = null,
    string MetricsConfig = null,
    AppsyncResolverPipelineConfig PipelineConfig = null,
    string RequestMappingTemplate = null,
    string RequestMappingTemplateS3Location = null,
    string ResponseMappingTemplate = null,
    string ResponseMappingTemplateS3Location = null,
    AppsyncResolverRuntime Runtime = null,
    AppsyncResolverSyncConfig SyncConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.apiId">ApiId</a></code> | <code>string</code> | The APSYlong GraphQL API to which you want to attach this resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.fieldName">FieldName</a></code> | <code>string</code> | The GraphQL field on a type that invokes the resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.typeName">TypeName</a></code> | <code>string</code> | The GraphQL type that invokes this resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.cachingConfig">CachingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | The caching configuration for the resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.code">Code</a></code> | <code>string</code> | The ``resolver`` code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.codeS3Location">CodeS3Location</a></code> | <code>string</code> | The Amazon S3 endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dataSourceName">DataSourceName</a></code> | <code>string</code> | The resolver data source name. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.kind">Kind</a></code> | <code>string</code> | The resolver type. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize">MaxBatchSize</a></code> | <code>double</code> | The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.metricsConfig">MetricsConfig</a></code> | <code>string</code> | Enables or disables enhanced resolver metrics for specified resolvers. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig">PipelineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | Functions linked with the pipeline resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplate">RequestMappingTemplate</a></code> | <code>string</code> | The request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplateS3Location">RequestMappingTemplateS3Location</a></code> | <code>string</code> | The location of a request mapping template in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplate">ResponseMappingTemplate</a></code> | <code>string</code> | The response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplateS3Location">ResponseMappingTemplateS3Location</a></code> | <code>string</code> | The location of a response mapping template in an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.runtime">Runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | Describes a runtime used by an APSYlong resolver or APSYlong function. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | The ``SyncConfig`` for a resolver attached to a versioned data source. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

The APSYlong GraphQL API to which you want to attach this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#api_id AppsyncResolver#api_id}

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

The GraphQL field on a type that invokes the resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#field_name AppsyncResolver#field_name}

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

The GraphQL type that invokes this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#type_name AppsyncResolver#type_name}

---

##### `CachingConfig`<sup>Optional</sup> <a name="CachingConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.cachingConfig"></a>

```csharp
public AppsyncResolverCachingConfig CachingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

The caching configuration for the resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#caching_config AppsyncResolver#caching_config}

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

The ``resolver`` code that contains the request and response functions.

When code is used, the `runtime` is required. The runtime value must be `APPSYNC_JS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#code AppsyncResolver#code}

---

##### `CodeS3Location`<sup>Optional</sup> <a name="CodeS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.codeS3Location"></a>

```csharp
public string CodeS3Location { get; set; }
```

- *Type:* string

The Amazon S3 endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#code_s3_location AppsyncResolver#code_s3_location}

---

##### `DataSourceName`<sup>Optional</sup> <a name="DataSourceName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.dataSourceName"></a>

```csharp
public string DataSourceName { get; set; }
```

- *Type:* string

The resolver data source name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#data_source_name AppsyncResolver#data_source_name}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The resolver type.

* *UNIT*: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
* *PIPELINE*: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of `Function` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#kind AppsyncResolver#kind}

---

##### `MaxBatchSize`<sup>Optional</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.maxBatchSize"></a>

```csharp
public double MaxBatchSize { get; set; }
```

- *Type:* double

The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.metricsConfig"></a>

```csharp
public string MetricsConfig { get; set; }
```

- *Type:* string

Enables or disables enhanced resolver metrics for specified resolvers.

Note that `MetricsConfig` won't be used unless the `resolverLevelMetricsBehavior` value is set to `PER_RESOLVER_METRICS`. If the `resolverLevelMetricsBehavior` is set to `FULL_REQUEST_RESOLVER_METRICS` instead, `MetricsConfig` will be ignored. However, you can still set its value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#metrics_config AppsyncResolver#metrics_config}

---

##### `PipelineConfig`<sup>Optional</sup> <a name="PipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.pipelineConfig"></a>

```csharp
public AppsyncResolverPipelineConfig PipelineConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

Functions linked with the pipeline resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}

---

##### `RequestMappingTemplate`<sup>Optional</sup> <a name="RequestMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplate"></a>

```csharp
public string RequestMappingTemplate { get; set; }
```

- *Type:* string

The request mapping template.

Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#request_mapping_template AppsyncResolver#request_mapping_template}

---

##### `RequestMappingTemplateS3Location`<sup>Optional</sup> <a name="RequestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.requestMappingTemplateS3Location"></a>

```csharp
public string RequestMappingTemplateS3Location { get; set; }
```

- *Type:* string

The location of a request mapping template in an S3 bucket.

Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#request_mapping_template_s3_location AppsyncResolver#request_mapping_template_s3_location}

---

##### `ResponseMappingTemplate`<sup>Optional</sup> <a name="ResponseMappingTemplate" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplate"></a>

```csharp
public string ResponseMappingTemplate { get; set; }
```

- *Type:* string

The response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#response_mapping_template AppsyncResolver#response_mapping_template}

---

##### `ResponseMappingTemplateS3Location`<sup>Optional</sup> <a name="ResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.responseMappingTemplateS3Location"></a>

```csharp
public string ResponseMappingTemplateS3Location { get; set; }
```

- *Type:* string

The location of a response mapping template in an S3 bucket.

Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#response_mapping_template_s3_location AppsyncResolver#response_mapping_template_s3_location}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.runtime"></a>

```csharp
public AppsyncResolverRuntime Runtime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

Describes a runtime used by an APSYlong resolver or APSYlong function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#runtime AppsyncResolver#runtime}

---

##### `SyncConfig`<sup>Optional</sup> <a name="SyncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverConfig.property.syncConfig"></a>

```csharp
public AppsyncResolverSyncConfig SyncConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

The ``SyncConfig`` for a resolver attached to a versioned data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#sync_config AppsyncResolver#sync_config}

---

### AppsyncResolverPipelineConfig <a name="AppsyncResolverPipelineConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverPipelineConfig {
    string[] Functions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig.property.functions">Functions</a></code> | <code>string[]</code> | A list of ``Function`` objects. |

---

##### `Functions`<sup>Optional</sup> <a name="Functions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig.property.functions"></a>

```csharp
public string[] Functions { get; set; }
```

- *Type:* string[]

A list of ``Function`` objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#functions AppsyncResolver#functions}

---

### AppsyncResolverRuntime <a name="AppsyncResolverRuntime" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverRuntime {
    string Name = null,
    string RuntimeVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.name">Name</a></code> | <code>string</code> | The ``name`` of the runtime to use. Currently, the only allowed value is ``APPSYNC_JS``. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | The ``version`` of the runtime to use. Currently, the only allowed version is ``1.0.0``. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ``name`` of the runtime to use. Currently, the only allowed value is ``APPSYNC_JS``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#name AppsyncResolver#name}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

The ``version`` of the runtime to use. Currently, the only allowed version is ``1.0.0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#runtime_version AppsyncResolver#runtime_version}

---

### AppsyncResolverSyncConfig <a name="AppsyncResolverSyncConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverSyncConfig {
    string ConflictDetection = null,
    string ConflictHandler = null,
    AppsyncResolverSyncConfigLambdaConflictHandlerConfig LambdaConflictHandlerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection">ConflictDetection</a></code> | <code>string</code> | The Conflict Detection strategy to use. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler">ConflictHandler</a></code> | <code>string</code> | The Conflict Resolution strategy to perform in the event of a conflict. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig">LambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | The ``LambdaConflictHandlerConfig`` when configuring ``LAMBDA`` as the Conflict Handler. |

---

##### `ConflictDetection`<sup>Optional</sup> <a name="ConflictDetection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictDetection"></a>

```csharp
public string ConflictDetection { get; set; }
```

- *Type:* string

The Conflict Detection strategy to use.

* *VERSION*: Detect conflicts based on object versions for this resolver.
* *NONE*: Do not detect conflicts when invoking this resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}

---

##### `ConflictHandler`<sup>Optional</sup> <a name="ConflictHandler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.conflictHandler"></a>

```csharp
public string ConflictHandler { get; set; }
```

- *Type:* string

The Conflict Resolution strategy to perform in the event of a conflict.

* *OPTIMISTIC_CONCURRENCY*: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
* *AUTOMERGE*: Resolve conflicts with the Automerge conflict resolution strategy.
* *LAMBDA*: Resolve conflicts with an LAMlong function supplied in the `LambdaConflictHandlerConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}

---

##### `LambdaConflictHandlerConfig`<sup>Optional</sup> <a name="LambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig.property.lambdaConflictHandlerConfig"></a>

```csharp
public AppsyncResolverSyncConfigLambdaConflictHandlerConfig LambdaConflictHandlerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

The ``LambdaConflictHandlerConfig`` when configuring ``LAMBDA`` as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}

---

### AppsyncResolverSyncConfigLambdaConflictHandlerConfig <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverSyncConfigLambdaConflictHandlerConfig {
    string LambdaConflictHandlerArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">LambdaConflictHandlerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler. |

---

##### `LambdaConflictHandlerArn`<sup>Optional</sup> <a name="LambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```csharp
public string LambdaConflictHandlerArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncResolverCachingConfigOutputReference <a name="AppsyncResolverCachingConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverCachingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys">ResetCachingKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCachingKeys` <a name="ResetCachingKeys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetCachingKeys"></a>

```csharp
private void ResetCachingKeys()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput">CachingKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys">CachingKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachingKeysInput`<sup>Optional</sup> <a name="CachingKeysInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeysInput"></a>

```csharp
public string[] CachingKeysInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `CachingKeys`<sup>Required</sup> <a name="CachingKeys" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.cachingKeys"></a>

```csharp
public string[] CachingKeys { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncResolverCachingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverCachingConfig">AppsyncResolverCachingConfig</a>

---


### AppsyncResolverPipelineConfigOutputReference <a name="AppsyncResolverPipelineConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverPipelineConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions">ResetFunctions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctions` <a name="ResetFunctions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.resetFunctions"></a>

```csharp
private void ResetFunctions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput">FunctionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions">Functions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionsInput`<sup>Optional</sup> <a name="FunctionsInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functionsInput"></a>

```csharp
public string[] FunctionsInput { get; }
```

- *Type:* string[]

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.functions"></a>

```csharp
public string[] Functions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncResolverPipelineConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverPipelineConfig">AppsyncResolverPipelineConfig</a>

---


### AppsyncResolverRuntimeOutputReference <a name="AppsyncResolverRuntimeOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverRuntimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.resetRuntimeVersion"></a>

```csharp
private void ResetRuntimeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncResolverRuntime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverRuntime">AppsyncResolverRuntime</a>

---


### AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">ResetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaConflictHandlerArn` <a name="ResetLambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```csharp
private void ResetLambdaConflictHandlerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">LambdaConflictHandlerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">LambdaConflictHandlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="LambdaConflictHandlerArnInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```csharp
public string LambdaConflictHandlerArnInput { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerArn`<sup>Required</sup> <a name="LambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```csharp
public string LambdaConflictHandlerArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncResolverSyncConfigLambdaConflictHandlerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncResolverSyncConfigOutputReference <a name="AppsyncResolverSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncResolverSyncConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig">PutLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection">ResetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler">ResetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig">ResetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaConflictHandlerConfig` <a name="PutLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```csharp
private void PutLambdaConflictHandlerConfig(AppsyncResolverSyncConfigLambdaConflictHandlerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `ResetConflictDetection` <a name="ResetConflictDetection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictDetection"></a>

```csharp
private void ResetConflictDetection()
```

##### `ResetConflictHandler` <a name="ResetConflictHandler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetConflictHandler"></a>

```csharp
private void ResetConflictHandler()
```

##### `ResetLambdaConflictHandlerConfig` <a name="ResetLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```csharp
private void ResetLambdaConflictHandlerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig">LambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput">ConflictDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput">ConflictHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">LambdaConflictHandlerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection">ConflictDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler">ConflictHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerConfig`<sup>Required</sup> <a name="LambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```csharp
public AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference LambdaConflictHandlerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `ConflictDetectionInput`<sup>Optional</sup> <a name="ConflictDetectionInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetectionInput"></a>

```csharp
public string ConflictDetectionInput { get; }
```

- *Type:* string

---

##### `ConflictHandlerInput`<sup>Optional</sup> <a name="ConflictHandlerInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandlerInput"></a>

```csharp
public string ConflictHandlerInput { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="LambdaConflictHandlerConfigInput" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```csharp
public IResolvable|AppsyncResolverSyncConfigLambdaConflictHandlerConfig LambdaConflictHandlerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigLambdaConflictHandlerConfig">AppsyncResolverSyncConfigLambdaConflictHandlerConfig</a>

---

##### `ConflictDetection`<sup>Required</sup> <a name="ConflictDetection" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictDetection"></a>

```csharp
public string ConflictDetection { get; }
```

- *Type:* string

---

##### `ConflictHandler`<sup>Required</sup> <a name="ConflictHandler" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.conflictHandler"></a>

```csharp
public string ConflictHandler { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncResolverSyncConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncResolver.AppsyncResolverSyncConfig">AppsyncResolverSyncConfig</a>

---



