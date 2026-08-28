# `iotJob` Submodule <a name="`iotJob` Submodule" id="@cdktn/provider-awscc.iotJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotJob <a name="IotJob" id="@cdktn/provider-awscc.iotJob.IotJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job awscc_iot_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJob(Construct Scope, string Id, IotJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig">IotJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobConfig">IotJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putAbortConfig">PutAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRetryConfig">PutJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRolloutConfig">PutJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putPresignedUrlConfig">PutPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putSchedulingConfig">PutSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putTimeoutConfig">PutTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetAbortConfig">ResetAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDestinationPackageVersions">ResetDestinationPackageVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDocument">ResetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDocumentParameters">ResetDocumentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDocumentSource">ResetDocumentSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRetryConfig">ResetJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRolloutConfig">ResetJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetJobTemplateArn">ResetJobTemplateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetPresignedUrlConfig">ResetPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetSchedulingConfig">ResetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetTargetSelection">ResetTargetSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetTimeoutConfig">ResetTimeoutConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotJob.IotJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotJob.IotJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotJob.IotJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotJob.IotJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotJob.IotJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotJob.IotJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotJob.IotJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotJob.IotJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotJob.IotJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotJob.IotJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotJob.IotJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotJob.IotJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotJob.IotJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotJob.IotJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotJob.IotJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotJob.IotJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotJob.IotJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotJob.IotJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotJob.IotJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotJob.IotJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotJob.IotJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotJob.IotJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotJob.IotJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAbortConfig` <a name="PutAbortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putAbortConfig"></a>

```csharp
private void PutAbortConfig(IotJobAbortConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJob.putAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

---

##### `PutJobExecutionsRetryConfig` <a name="PutJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRetryConfig"></a>

```csharp
private void PutJobExecutionsRetryConfig(IotJobJobExecutionsRetryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

---

##### `PutJobExecutionsRolloutConfig` <a name="PutJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRolloutConfig"></a>

```csharp
private void PutJobExecutionsRolloutConfig(IotJobJobExecutionsRolloutConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

---

##### `PutPresignedUrlConfig` <a name="PutPresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putPresignedUrlConfig"></a>

```csharp
private void PutPresignedUrlConfig(IotJobPresignedUrlConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJob.putPresignedUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

---

##### `PutSchedulingConfig` <a name="PutSchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putSchedulingConfig"></a>

```csharp
private void PutSchedulingConfig(IotJobSchedulingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJob.putSchedulingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotJob.IotJob.putTags"></a>

```csharp
private void PutTags(IResolvable|IotJobTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJob.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]

---

##### `PutTimeoutConfig` <a name="PutTimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putTimeoutConfig"></a>

```csharp
private void PutTimeoutConfig(IotJobTimeoutConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJob.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

---

##### `ResetAbortConfig` <a name="ResetAbortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetAbortConfig"></a>

```csharp
private void ResetAbortConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotJob.IotJob.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationPackageVersions` <a name="ResetDestinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJob.resetDestinationPackageVersions"></a>

```csharp
private void ResetDestinationPackageVersions()
```

##### `ResetDocument` <a name="ResetDocument" id="@cdktn/provider-awscc.iotJob.IotJob.resetDocument"></a>

```csharp
private void ResetDocument()
```

##### `ResetDocumentParameters` <a name="ResetDocumentParameters" id="@cdktn/provider-awscc.iotJob.IotJob.resetDocumentParameters"></a>

```csharp
private void ResetDocumentParameters()
```

##### `ResetDocumentSource` <a name="ResetDocumentSource" id="@cdktn/provider-awscc.iotJob.IotJob.resetDocumentSource"></a>

```csharp
private void ResetDocumentSource()
```

##### `ResetJobExecutionsRetryConfig` <a name="ResetJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRetryConfig"></a>

```csharp
private void ResetJobExecutionsRetryConfig()
```

##### `ResetJobExecutionsRolloutConfig` <a name="ResetJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRolloutConfig"></a>

```csharp
private void ResetJobExecutionsRolloutConfig()
```

##### `ResetJobTemplateArn` <a name="ResetJobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJob.resetJobTemplateArn"></a>

```csharp
private void ResetJobTemplateArn()
```

##### `ResetPresignedUrlConfig` <a name="ResetPresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetPresignedUrlConfig"></a>

```csharp
private void ResetPresignedUrlConfig()
```

##### `ResetSchedulingConfig` <a name="ResetSchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetSchedulingConfig"></a>

```csharp
private void ResetSchedulingConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotJob.IotJob.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetSelection` <a name="ResetTargetSelection" id="@cdktn/provider-awscc.iotJob.IotJob.resetTargetSelection"></a>

```csharp
private void ResetTargetSelection()
```

##### `ResetTimeoutConfig` <a name="ResetTimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetTimeoutConfig"></a>

```csharp
private void ResetTimeoutConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotJob.IotJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotJob.IotJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.abortConfig">AbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference">IotJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfig">JobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference">IotJobJobExecutionsRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfig">JobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference">IotJobJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfig">PresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference">IotJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference">IotJobSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList">IotJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference">IotJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.abortConfigInput">AbortConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersionsInput">DestinationPackageVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentInput">DocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentParametersInput">DocumentParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentSourceInput">DocumentSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfigInput">JobExecutionsRetryConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfigInput">JobExecutionsRolloutConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobIdInput">JobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArnInput">JobTemplateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfigInput">PresignedUrlConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfigInput">SchedulingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targetSelectionInput">TargetSelectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targetsInput">TargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfigInput">TimeoutConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersions">DestinationPackageVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.document">Document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentParameters">DocumentParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentSource">DocumentSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArn">JobTemplateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targetSelection">TargetSelection</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotJob.IotJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotJob.IotJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotJob.IotJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotJob.IotJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotJob.IotJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotJob.IotJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotJob.IotJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotJob.IotJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotJob.IotJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotJob.IotJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotJob.IotJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotJob.IotJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotJob.IotJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AbortConfig`<sup>Required</sup> <a name="AbortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.abortConfig"></a>

```csharp
public IotJobAbortConfigOutputReference AbortConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference">IotJobAbortConfigOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotJob.IotJob.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.iotJob.IotJob.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotJob.IotJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobExecutionsRetryConfig`<sup>Required</sup> <a name="JobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfig"></a>

```csharp
public IotJobJobExecutionsRetryConfigOutputReference JobExecutionsRetryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference">IotJobJobExecutionsRetryConfigOutputReference</a>

---

##### `JobExecutionsRolloutConfig`<sup>Required</sup> <a name="JobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfig"></a>

```csharp
public IotJobJobExecutionsRolloutConfigOutputReference JobExecutionsRolloutConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference">IotJobJobExecutionsRolloutConfigOutputReference</a>

---

##### `PresignedUrlConfig`<sup>Required</sup> <a name="PresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfig"></a>

```csharp
public IotJobPresignedUrlConfigOutputReference PresignedUrlConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference">IotJobPresignedUrlConfigOutputReference</a>

---

##### `SchedulingConfig`<sup>Required</sup> <a name="SchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfig"></a>

```csharp
public IotJobSchedulingConfigOutputReference SchedulingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference">IotJobSchedulingConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotJob.IotJob.property.tags"></a>

```csharp
public IotJobTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList">IotJobTagsList</a>

---

##### `TimeoutConfig`<sup>Required</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfig"></a>

```csharp
public IotJobTimeoutConfigOutputReference TimeoutConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference">IotJobTimeoutConfigOutputReference</a>

---

##### `AbortConfigInput`<sup>Optional</sup> <a name="AbortConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.abortConfigInput"></a>

```csharp
public IResolvable|IotJobAbortConfig AbortConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationPackageVersionsInput`<sup>Optional</sup> <a name="DestinationPackageVersionsInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersionsInput"></a>

```csharp
public string[] DestinationPackageVersionsInput { get; }
```

- *Type:* string[]

---

##### `DocumentInput`<sup>Optional</sup> <a name="DocumentInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentInput"></a>

```csharp
public string DocumentInput { get; }
```

- *Type:* string

---

##### `DocumentParametersInput`<sup>Optional</sup> <a name="DocumentParametersInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DocumentParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DocumentSourceInput`<sup>Optional</sup> <a name="DocumentSourceInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentSourceInput"></a>

```csharp
public string DocumentSourceInput { get; }
```

- *Type:* string

---

##### `JobExecutionsRetryConfigInput`<sup>Optional</sup> <a name="JobExecutionsRetryConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfigInput"></a>

```csharp
public IResolvable|IotJobJobExecutionsRetryConfig JobExecutionsRetryConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

---

##### `JobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="JobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfigInput"></a>

```csharp
public IResolvable|IotJobJobExecutionsRolloutConfig JobExecutionsRolloutConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobIdInput"></a>

```csharp
public string JobIdInput { get; }
```

- *Type:* string

---

##### `JobTemplateArnInput`<sup>Optional</sup> <a name="JobTemplateArnInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArnInput"></a>

```csharp
public string JobTemplateArnInput { get; }
```

- *Type:* string

---

##### `PresignedUrlConfigInput`<sup>Optional</sup> <a name="PresignedUrlConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfigInput"></a>

```csharp
public IResolvable|IotJobPresignedUrlConfig PresignedUrlConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

---

##### `SchedulingConfigInput`<sup>Optional</sup> <a name="SchedulingConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfigInput"></a>

```csharp
public IResolvable|IotJobSchedulingConfig SchedulingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.tagsInput"></a>

```csharp
public IResolvable|IotJobTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]

---

##### `TargetSelectionInput`<sup>Optional</sup> <a name="TargetSelectionInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.targetSelectionInput"></a>

```csharp
public string TargetSelectionInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.targetsInput"></a>

```csharp
public string[] TargetsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutConfigInput`<sup>Optional</sup> <a name="TimeoutConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfigInput"></a>

```csharp
public IResolvable|IotJobTimeoutConfig TimeoutConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotJob.IotJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationPackageVersions`<sup>Required</sup> <a name="DestinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersions"></a>

```csharp
public string[] DestinationPackageVersions { get; }
```

- *Type:* string[]

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktn/provider-awscc.iotJob.IotJob.property.document"></a>

```csharp
public string Document { get; }
```

- *Type:* string

---

##### `DocumentParameters`<sup>Required</sup> <a name="DocumentParameters" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DocumentParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DocumentSource`<sup>Required</sup> <a name="DocumentSource" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentSource"></a>

```csharp
public string DocumentSource { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `JobTemplateArn`<sup>Required</sup> <a name="JobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArn"></a>

```csharp
public string JobTemplateArn { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.iotJob.IotJob.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `TargetSelection`<sup>Required</sup> <a name="TargetSelection" id="@cdktn/provider-awscc.iotJob.IotJob.property.targetSelection"></a>

```csharp
public string TargetSelection { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotJob.IotJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotJobAbortConfig <a name="IotJobAbortConfig" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobAbortConfig {
    IResolvable|IotJobAbortConfigCriteriaListStruct[] CriteriaList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig.property.criteriaList">CriteriaList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]</code> | The list of criteria that determine when and how to abort the job. |

---

##### `CriteriaList`<sup>Optional</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfig.property.criteriaList"></a>

```csharp
public IResolvable|IotJobAbortConfigCriteriaListStruct[] CriteriaList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]

The list of criteria that determine when and how to abort the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#criteria_list IotJob#criteria_list}

---

### IotJobAbortConfigCriteriaListStruct <a name="IotJobAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobAbortConfigCriteriaListStruct {
    string Action = null,
    string FailureType = null,
    double MinNumberOfExecutedThings = null,
    double ThresholdPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.action">Action</a></code> | <code>string</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.failureType">FailureType</a></code> | <code>string</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>double</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>double</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#action IotJob#action}

---

##### `FailureType`<sup>Optional</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.failureType"></a>

```csharp
public string FailureType { get; set; }
```

- *Type:* string

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#failure_type IotJob#failure_type}

---

##### `MinNumberOfExecutedThings`<sup>Optional</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```csharp
public double MinNumberOfExecutedThings { get; set; }
```

- *Type:* double

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#min_number_of_executed_things IotJob#min_number_of_executed_things}

---

##### `ThresholdPercentage`<sup>Optional</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```csharp
public double ThresholdPercentage { get; set; }
```

- *Type:* double

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#threshold_percentage IotJob#threshold_percentage}

---

### IotJobConfig <a name="IotJobConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string JobId,
    string[] Targets,
    IotJobAbortConfig AbortConfig = null,
    string Description = null,
    string[] DestinationPackageVersions = null,
    string Document = null,
    System.Collections.Generic.IDictionary<string, string> DocumentParameters = null,
    string DocumentSource = null,
    IotJobJobExecutionsRetryConfig JobExecutionsRetryConfig = null,
    IotJobJobExecutionsRolloutConfig JobExecutionsRolloutConfig = null,
    string JobTemplateArn = null,
    IotJobPresignedUrlConfig PresignedUrlConfig = null,
    IotJobSchedulingConfig SchedulingConfig = null,
    IResolvable|IotJobTags[] Tags = null,
    string TargetSelection = null,
    IotJobTimeoutConfig TimeoutConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobId">JobId</a></code> | <code>string</code> | A job identifier which must be unique for your AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.targets">Targets</a></code> | <code>string[]</code> | A list of things and thing groups to which the job should be sent. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.abortConfig">AbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.description">Description</a></code> | <code>string</code> | A short text description of the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.destinationPackageVersions">DestinationPackageVersions</a></code> | <code>string[]</code> | The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.document">Document</a></code> | <code>string</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentParameters">DocumentParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Parameters of an Amazon Web Services managed template that you can specify to create the job document. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentSource">DocumentSource</a></code> | <code>string</code> | An S3 link, or S3 object URL, to the job document. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRetryConfig">JobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | The configuration that determines how many retries are allowed for each failure type for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRolloutConfig">JobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobTemplateArn">JobTemplateArn</a></code> | <code>string</code> | The ARN of the job template used to create the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.presignedUrlConfig">PresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.schedulingConfig">SchedulingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]</code> | Metadata which can be used to manage the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.targetSelection">TargetSelection</a></code> | <code>string</code> | Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobId"></a>

```csharp
public string JobId { get; set; }
```

- *Type:* string

A job identifier which must be unique for your AWS account.

We recommend using a UUID. Alpha-numeric characters, '-' and '_' are valid for use here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#job_id IotJob#job_id}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.targets"></a>

```csharp
public string[] Targets { get; set; }
```

- *Type:* string[]

A list of things and thing groups to which the job should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#targets IotJob#targets}

---

##### `AbortConfig`<sup>Optional</sup> <a name="AbortConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.abortConfig"></a>

```csharp
public IotJobAbortConfig AbortConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#abort_config IotJob#abort_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A short text description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#description IotJob#description}

---

##### `DestinationPackageVersions`<sup>Optional</sup> <a name="DestinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.destinationPackageVersions"></a>

```csharp
public string[] DestinationPackageVersions { get; set; }
```

- *Type:* string[]

The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#destination_package_versions IotJob#destination_package_versions}

---

##### `Document`<sup>Optional</sup> <a name="Document" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.document"></a>

```csharp
public string Document { get; set; }
```

- *Type:* string

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#document IotJob#document}

---

##### `DocumentParameters`<sup>Optional</sup> <a name="DocumentParameters" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DocumentParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Parameters of an Amazon Web Services managed template that you can specify to create the job document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#document_parameters IotJob#document_parameters}

---

##### `DocumentSource`<sup>Optional</sup> <a name="DocumentSource" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentSource"></a>

```csharp
public string DocumentSource { get; set; }
```

- *Type:* string

An S3 link, or S3 object URL, to the job document.

The link is an Amazon S3 object URL and is required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#document_source IotJob#document_source}

---

##### `JobExecutionsRetryConfig`<sup>Optional</sup> <a name="JobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRetryConfig"></a>

```csharp
public IotJobJobExecutionsRetryConfig JobExecutionsRetryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

The configuration that determines how many retries are allowed for each failure type for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#job_executions_retry_config IotJob#job_executions_retry_config}

---

##### `JobExecutionsRolloutConfig`<sup>Optional</sup> <a name="JobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRolloutConfig"></a>

```csharp
public IotJobJobExecutionsRolloutConfig JobExecutionsRolloutConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#job_executions_rollout_config IotJob#job_executions_rollout_config}

---

##### `JobTemplateArn`<sup>Optional</sup> <a name="JobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobTemplateArn"></a>

```csharp
public string JobTemplateArn { get; set; }
```

- *Type:* string

The ARN of the job template used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#job_template_arn IotJob#job_template_arn}

---

##### `PresignedUrlConfig`<sup>Optional</sup> <a name="PresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.presignedUrlConfig"></a>

```csharp
public IotJobPresignedUrlConfig PresignedUrlConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#presigned_url_config IotJob#presigned_url_config}

---

##### `SchedulingConfig`<sup>Optional</sup> <a name="SchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.schedulingConfig"></a>

```csharp
public IotJobSchedulingConfig SchedulingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#scheduling_config IotJob#scheduling_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.tags"></a>

```csharp
public IResolvable|IotJobTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]

Metadata which can be used to manage the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#tags IotJob#tags}

---

##### `TargetSelection`<sup>Optional</sup> <a name="TargetSelection" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.targetSelection"></a>

```csharp
public string TargetSelection { get; set; }
```

- *Type:* string

Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#target_selection IotJob#target_selection}

---

##### `TimeoutConfig`<sup>Optional</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.timeoutConfig"></a>

```csharp
public IotJobTimeoutConfig TimeoutConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#timeout_config IotJob#timeout_config}

---

### IotJobJobExecutionsRetryConfig <a name="IotJobJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRetryConfig {
    IResolvable|IotJobJobExecutionsRetryConfigCriteriaListStruct[] CriteriaList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig.property.criteriaList">CriteriaList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]</code> | The list of criteria that determines how many retries are allowed for each failure type for a job. |

---

##### `CriteriaList`<sup>Optional</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig.property.criteriaList"></a>

```csharp
public IResolvable|IotJobJobExecutionsRetryConfigCriteriaListStruct[] CriteriaList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]

The list of criteria that determines how many retries are allowed for each failure type for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#criteria_list IotJob#criteria_list}

---

### IotJobJobExecutionsRetryConfigCriteriaListStruct <a name="IotJobJobExecutionsRetryConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRetryConfigCriteriaListStruct {
    string FailureType = null,
    double NumberOfRetries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.failureType">FailureType</a></code> | <code>string</code> | The type of job execution failures that can initiate a job retry. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.numberOfRetries">NumberOfRetries</a></code> | <code>double</code> | The number of retries allowed for a failure type for the job. |

---

##### `FailureType`<sup>Optional</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.failureType"></a>

```csharp
public string FailureType { get; set; }
```

- *Type:* string

The type of job execution failures that can initiate a job retry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#failure_type IotJob#failure_type}

---

##### `NumberOfRetries`<sup>Optional</sup> <a name="NumberOfRetries" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.numberOfRetries"></a>

```csharp
public double NumberOfRetries { get; set; }
```

- *Type:* double

The number of retries allowed for a failure type for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#number_of_retries IotJob#number_of_retries}

---

### IotJobJobExecutionsRolloutConfig <a name="IotJobJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRolloutConfig {
    IotJobJobExecutionsRolloutConfigExponentialRate ExponentialRate = null,
    double MaximumPerMinute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a></code> | Allows you to create an exponential rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>double</code> | The maximum number of things that will be notified of a pending job, per minute. |

---

##### `ExponentialRate`<sup>Optional</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.exponentialRate"></a>

```csharp
public IotJobJobExecutionsRolloutConfigExponentialRate ExponentialRate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

Allows you to create an exponential rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#exponential_rate IotJob#exponential_rate}

---

##### `MaximumPerMinute`<sup>Optional</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```csharp
public double MaximumPerMinute { get; set; }
```

- *Type:* double

The maximum number of things that will be notified of a pending job, per minute.

This parameter allows you to create a staged rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#maximum_per_minute IotJob#maximum_per_minute}

---

### IotJobJobExecutionsRolloutConfigExponentialRate <a name="IotJobJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRolloutConfigExponentialRate {
    double BaseRatePerMinute = null,
    double IncrementFactor = null,
    IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria RateIncreaseCriteria = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>double</code> | The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">IncrementFactor</a></code> | <code>double</code> | The exponential factor to increase the rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Allows you to define a criteria to initiate the increase in rate of rollout for a job. |

---

##### `BaseRatePerMinute`<sup>Optional</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```csharp
public double BaseRatePerMinute { get; set; }
```

- *Type:* double

The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#base_rate_per_minute IotJob#base_rate_per_minute}

---

##### `IncrementFactor`<sup>Optional</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```csharp
public double IncrementFactor { get; set; }
```

- *Type:* double

The exponential factor to increase the rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#increment_factor IotJob#increment_factor}

---

##### `RateIncreaseCriteria`<sup>Optional</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```csharp
public IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria RateIncreaseCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Allows you to define a criteria to initiate the increase in rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#rate_increase_criteria IotJob#rate_increase_criteria}

---

### IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
    double NumberOfNotifiedThings = null,
    double NumberOfSucceededThings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>double</code> | The threshold for number of notified things that will initiate the increase in rate of rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>double</code> | The threshold for number of succeeded things that will initiate the increase in rate of rollout. |

---

##### `NumberOfNotifiedThings`<sup>Optional</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```csharp
public double NumberOfNotifiedThings { get; set; }
```

- *Type:* double

The threshold for number of notified things that will initiate the increase in rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#number_of_notified_things IotJob#number_of_notified_things}

---

##### `NumberOfSucceededThings`<sup>Optional</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```csharp
public double NumberOfSucceededThings { get; set; }
```

- *Type:* double

The threshold for number of succeeded things that will initiate the increase in rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#number_of_succeeded_things IotJob#number_of_succeeded_things}

---

### IotJobPresignedUrlConfig <a name="IotJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobPresignedUrlConfig {
    double ExpiresInSec = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.expiresInSec">ExpiresInSec</a></code> | <code>double</code> | How long (in seconds) pre-signed URLs are valid. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of an IAM role that grants permission to download files from the S3 bucket where the job data/updates are stored. |

---

##### `ExpiresInSec`<sup>Optional</sup> <a name="ExpiresInSec" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.expiresInSec"></a>

```csharp
public double ExpiresInSec { get; set; }
```

- *Type:* double

How long (in seconds) pre-signed URLs are valid.

Valid values are 60 - 3600, the default value is 3600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#expires_in_sec IotJob#expires_in_sec}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of an IAM role that grants permission to download files from the S3 bucket where the job data/updates are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#role_arn IotJob#role_arn}

---

### IotJobSchedulingConfig <a name="IotJobSchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobSchedulingConfig {
    string EndBehavior = null,
    string EndTime = null,
    IResolvable|IotJobSchedulingConfigMaintenanceWindows[] MaintenanceWindows = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endBehavior">EndBehavior</a></code> | <code>string</code> | Specifies the end behavior for all job executions after a job reaches the selected endTime. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endTime">EndTime</a></code> | <code>string</code> | The time a job will stop rollout of the job document to all devices in the target group for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.maintenanceWindows">MaintenanceWindows</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]</code> | An optional configuration within the SchedulingConfig to setup a recurring maintenance window. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.startTime">StartTime</a></code> | <code>string</code> | The time a job will begin rollout of the job document to all devices in the target group for a job. |

---

##### `EndBehavior`<sup>Optional</sup> <a name="EndBehavior" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endBehavior"></a>

```csharp
public string EndBehavior { get; set; }
```

- *Type:* string

Specifies the end behavior for all job executions after a job reaches the selected endTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#end_behavior IotJob#end_behavior}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The time a job will stop rollout of the job document to all devices in the target group for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#end_time IotJob#end_time}

---

##### `MaintenanceWindows`<sup>Optional</sup> <a name="MaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.maintenanceWindows"></a>

```csharp
public IResolvable|IotJobSchedulingConfigMaintenanceWindows[] MaintenanceWindows { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]

An optional configuration within the SchedulingConfig to setup a recurring maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#maintenance_windows IotJob#maintenance_windows}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The time a job will begin rollout of the job document to all devices in the target group for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#start_time IotJob#start_time}

---

### IotJobSchedulingConfigMaintenanceWindows <a name="IotJobSchedulingConfigMaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobSchedulingConfigMaintenanceWindows {
    double DurationInMinutes = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | Displays the duration of the next maintenance window. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.startTime">StartTime</a></code> | <code>string</code> | Displays the start time of the next maintenance window. |

---

##### `DurationInMinutes`<sup>Optional</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; set; }
```

- *Type:* double

Displays the duration of the next maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#duration_in_minutes IotJob#duration_in_minutes}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Displays the start time of the next maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#start_time IotJob#start_time}

---

### IotJobTags <a name="IotJobTags" id="@cdktn/provider-awscc.iotJob.IotJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTags.property.key">Key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTags.property.value">Value</a></code> | <code>string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotJob.IotJobTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#key IotJob#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJobTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#value IotJob#value}

---

### IotJobTimeoutConfig <a name="IotJobTimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobTimeoutConfig {
    double InProgressTimeoutInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>double</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `InProgressTimeoutInMinutes`<sup>Optional</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```csharp
public double InProgressTimeoutInMinutes { get; set; }
```

- *Type:* double

Specifies the amount of time, in minutes, this device has to finish execution of this job.

The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job#in_progress_timeout_in_minutes IotJob#in_progress_timeout_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotJobAbortConfigCriteriaListStructList <a name="IotJobAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobAbortConfigCriteriaListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.get"></a>

```csharp
private IotJobAbortConfigCriteriaListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.internalValue"></a>

```csharp
public IResolvable|IotJobAbortConfigCriteriaListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]

---


### IotJobAbortConfigCriteriaListStructOutputReference <a name="IotJobAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobAbortConfigCriteriaListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetFailureType">ResetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">ResetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">ResetThresholdPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetFailureType` <a name="ResetFailureType" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```csharp
private void ResetFailureType()
```

##### `ResetMinNumberOfExecutedThings` <a name="ResetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```csharp
private void ResetMinNumberOfExecutedThings()
```

##### `ResetThresholdPercentage` <a name="ResetThresholdPercentage" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```csharp
private void ResetThresholdPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">FailureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">MinNumberOfExecutedThingsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">ThresholdPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureType">FailureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `FailureTypeInput`<sup>Optional</sup> <a name="FailureTypeInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```csharp
public string FailureTypeInput { get; }
```

- *Type:* string

---

##### `MinNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="MinNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```csharp
public double MinNumberOfExecutedThingsInput { get; }
```

- *Type:* double

---

##### `ThresholdPercentageInput`<sup>Optional</sup> <a name="ThresholdPercentageInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```csharp
public double ThresholdPercentageInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `FailureType`<sup>Required</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```csharp
public string FailureType { get; }
```

- *Type:* string

---

##### `MinNumberOfExecutedThings`<sup>Required</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```csharp
public double MinNumberOfExecutedThings { get; }
```

- *Type:* double

---

##### `ThresholdPercentage`<sup>Required</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```csharp
public double ThresholdPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobAbortConfigCriteriaListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>

---


### IotJobAbortConfigOutputReference <a name="IotJobAbortConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobAbortConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.putCriteriaList">PutCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resetCriteriaList">ResetCriteriaList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteriaList` <a name="PutCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.putCriteriaList"></a>

```csharp
private void PutCriteriaList(IResolvable|IotJobAbortConfigCriteriaListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]

---

##### `ResetCriteriaList` <a name="ResetCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resetCriteriaList"></a>

```csharp
private void ResetCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaList">CriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList">IotJobAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaListInput">CriteriaListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CriteriaList`<sup>Required</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaList"></a>

```csharp
public IotJobAbortConfigCriteriaListStructList CriteriaList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList">IotJobAbortConfigCriteriaListStructList</a>

---

##### `CriteriaListInput`<sup>Optional</sup> <a name="CriteriaListInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaListInput"></a>

```csharp
public IResolvable|IotJobAbortConfigCriteriaListStruct[] CriteriaListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobAbortConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

---


### IotJobJobExecutionsRetryConfigCriteriaListStructList <a name="IotJobJobExecutionsRetryConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRetryConfigCriteriaListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.get"></a>

```csharp
private IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.internalValue"></a>

```csharp
public IResolvable|IotJobJobExecutionsRetryConfigCriteriaListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]

---


### IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference <a name="IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetFailureType">ResetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetNumberOfRetries">ResetNumberOfRetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureType` <a name="ResetFailureType" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetFailureType"></a>

```csharp
private void ResetFailureType()
```

##### `ResetNumberOfRetries` <a name="ResetNumberOfRetries" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetNumberOfRetries"></a>

```csharp
private void ResetNumberOfRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureTypeInput">FailureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetriesInput">NumberOfRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType">FailureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries">NumberOfRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureTypeInput`<sup>Optional</sup> <a name="FailureTypeInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```csharp
public string FailureTypeInput { get; }
```

- *Type:* string

---

##### `NumberOfRetriesInput`<sup>Optional</sup> <a name="NumberOfRetriesInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetriesInput"></a>

```csharp
public double NumberOfRetriesInput { get; }
```

- *Type:* double

---

##### `FailureType`<sup>Required</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType"></a>

```csharp
public string FailureType { get; }
```

- *Type:* string

---

##### `NumberOfRetries`<sup>Required</sup> <a name="NumberOfRetries" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries"></a>

```csharp
public double NumberOfRetries { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobJobExecutionsRetryConfigCriteriaListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>

---


### IotJobJobExecutionsRetryConfigOutputReference <a name="IotJobJobExecutionsRetryConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRetryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.putCriteriaList">PutCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resetCriteriaList">ResetCriteriaList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteriaList` <a name="PutCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.putCriteriaList"></a>

```csharp
private void PutCriteriaList(IResolvable|IotJobJobExecutionsRetryConfigCriteriaListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]

---

##### `ResetCriteriaList` <a name="ResetCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resetCriteriaList"></a>

```csharp
private void ResetCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaList">CriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList">IotJobJobExecutionsRetryConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaListInput">CriteriaListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CriteriaList`<sup>Required</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaList"></a>

```csharp
public IotJobJobExecutionsRetryConfigCriteriaListStructList CriteriaList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList">IotJobJobExecutionsRetryConfigCriteriaListStructList</a>

---

##### `CriteriaListInput`<sup>Optional</sup> <a name="CriteriaListInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaListInput"></a>

```csharp
public IResolvable|IotJobJobExecutionsRetryConfigCriteriaListStruct[] CriteriaListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobJobExecutionsRetryConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

---


### IotJobJobExecutionsRolloutConfigExponentialRateOutputReference <a name="IotJobJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRolloutConfigExponentialRateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">PutRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">ResetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">ResetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">ResetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRateIncreaseCriteria` <a name="PutRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```csharp
private void PutRateIncreaseCriteria(IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `ResetBaseRatePerMinute` <a name="ResetBaseRatePerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```csharp
private void ResetBaseRatePerMinute()
```

##### `ResetIncrementFactor` <a name="ResetIncrementFactor" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```csharp
private void ResetIncrementFactor()
```

##### `ResetRateIncreaseCriteria` <a name="ResetRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```csharp
private void ResetRateIncreaseCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">BaseRatePerMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">IncrementFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">RateIncreaseCriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">IncrementFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RateIncreaseCriteria`<sup>Required</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```csharp
public IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference RateIncreaseCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `BaseRatePerMinuteInput`<sup>Optional</sup> <a name="BaseRatePerMinuteInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```csharp
public double BaseRatePerMinuteInput { get; }
```

- *Type:* double

---

##### `IncrementFactorInput`<sup>Optional</sup> <a name="IncrementFactorInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```csharp
public double IncrementFactorInput { get; }
```

- *Type:* double

---

##### `RateIncreaseCriteriaInput`<sup>Optional</sup> <a name="RateIncreaseCriteriaInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```csharp
public IResolvable|IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria RateIncreaseCriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `BaseRatePerMinute`<sup>Required</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```csharp
public double BaseRatePerMinute { get; }
```

- *Type:* double

---

##### `IncrementFactor`<sup>Required</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```csharp
public double IncrementFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobJobExecutionsRolloutConfigExponentialRate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

---


### IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">ResetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">ResetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfNotifiedThings` <a name="ResetNumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```csharp
private void ResetNumberOfNotifiedThings()
```

##### `ResetNumberOfSucceededThings` <a name="ResetNumberOfSucceededThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```csharp
private void ResetNumberOfSucceededThings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">NumberOfNotifiedThingsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">NumberOfSucceededThingsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberOfNotifiedThingsInput`<sup>Optional</sup> <a name="NumberOfNotifiedThingsInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```csharp
public double NumberOfNotifiedThingsInput { get; }
```

- *Type:* double

---

##### `NumberOfSucceededThingsInput`<sup>Optional</sup> <a name="NumberOfSucceededThingsInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```csharp
public double NumberOfSucceededThingsInput { get; }
```

- *Type:* double

---

##### `NumberOfNotifiedThings`<sup>Required</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```csharp
public double NumberOfNotifiedThings { get; }
```

- *Type:* double

---

##### `NumberOfSucceededThings`<sup>Required</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```csharp
public double NumberOfSucceededThings { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### IotJobJobExecutionsRolloutConfigOutputReference <a name="IotJobJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobJobExecutionsRolloutConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.putExponentialRate">PutExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetExponentialRate">ResetExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">ResetMaximumPerMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExponentialRate` <a name="PutExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```csharp
private void PutExponentialRate(IotJobJobExecutionsRolloutConfigExponentialRate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

---

##### `ResetExponentialRate` <a name="ResetExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```csharp
private void ResetExponentialRate()
```

##### `ResetMaximumPerMinute` <a name="ResetMaximumPerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```csharp
private void ResetMaximumPerMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">ExponentialRateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">MaximumPerMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExponentialRate`<sup>Required</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```csharp
public IotJobJobExecutionsRolloutConfigExponentialRateOutputReference ExponentialRate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `ExponentialRateInput`<sup>Optional</sup> <a name="ExponentialRateInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```csharp
public IResolvable|IotJobJobExecutionsRolloutConfigExponentialRate ExponentialRateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

---

##### `MaximumPerMinuteInput`<sup>Optional</sup> <a name="MaximumPerMinuteInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```csharp
public double MaximumPerMinuteInput { get; }
```

- *Type:* double

---

##### `MaximumPerMinute`<sup>Required</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```csharp
public double MaximumPerMinute { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobJobExecutionsRolloutConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

---


### IotJobPresignedUrlConfigOutputReference <a name="IotJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobPresignedUrlConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetExpiresInSec">ResetExpiresInSec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpiresInSec` <a name="ResetExpiresInSec" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```csharp
private void ResetExpiresInSec()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSecInput">ExpiresInSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSec">ExpiresInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpiresInSecInput`<sup>Optional</sup> <a name="ExpiresInSecInput" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```csharp
public double ExpiresInSecInput { get; }
```

- *Type:* double

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ExpiresInSec`<sup>Required</sup> <a name="ExpiresInSec" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```csharp
public double ExpiresInSec { get; }
```

- *Type:* double

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobPresignedUrlConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

---


### IotJobSchedulingConfigMaintenanceWindowsList <a name="IotJobSchedulingConfigMaintenanceWindowsList" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobSchedulingConfigMaintenanceWindowsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.get"></a>

```csharp
private IotJobSchedulingConfigMaintenanceWindowsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.internalValue"></a>

```csharp
public IResolvable|IotJobSchedulingConfigMaintenanceWindows[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]

---


### IotJobSchedulingConfigMaintenanceWindowsOutputReference <a name="IotJobSchedulingConfigMaintenanceWindowsOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobSchedulingConfigMaintenanceWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetDurationInMinutes">ResetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationInMinutes` <a name="ResetDurationInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetDurationInMinutes"></a>

```csharp
private void ResetDurationInMinutes()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutesInput"></a>

```csharp
public double DurationInMinutesInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobSchedulingConfigMaintenanceWindows InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>

---


### IotJobSchedulingConfigOutputReference <a name="IotJobSchedulingConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobSchedulingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.putMaintenanceWindows">PutMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndBehavior">ResetEndBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetMaintenanceWindows">ResetMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceWindows` <a name="PutMaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.putMaintenanceWindows"></a>

```csharp
private void PutMaintenanceWindows(IResolvable|IotJobSchedulingConfigMaintenanceWindows[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.putMaintenanceWindows.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]

---

##### `ResetEndBehavior` <a name="ResetEndBehavior" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndBehavior"></a>

```csharp
private void ResetEndBehavior()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetMaintenanceWindows` <a name="ResetMaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetMaintenanceWindows"></a>

```csharp
private void ResetMaintenanceWindows()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindows">MaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList">IotJobSchedulingConfigMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehaviorInput">EndBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindowsInput">MaintenanceWindowsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehavior">EndBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceWindows`<sup>Required</sup> <a name="MaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindows"></a>

```csharp
public IotJobSchedulingConfigMaintenanceWindowsList MaintenanceWindows { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList">IotJobSchedulingConfigMaintenanceWindowsList</a>

---

##### `EndBehaviorInput`<sup>Optional</sup> <a name="EndBehaviorInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehaviorInput"></a>

```csharp
public string EndBehaviorInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowsInput`<sup>Optional</sup> <a name="MaintenanceWindowsInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindowsInput"></a>

```csharp
public IResolvable|IotJobSchedulingConfigMaintenanceWindows[] MaintenanceWindowsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndBehavior`<sup>Required</sup> <a name="EndBehavior" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehavior"></a>

```csharp
public string EndBehavior { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobSchedulingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

---


### IotJobTagsList <a name="IotJobTagsList" id="@cdktn/provider-awscc.iotJob.IotJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.get"></a>

```csharp
private IotJobTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotJobTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]

---


### IotJobTagsOutputReference <a name="IotJobTagsOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>

---


### IotJobTimeoutConfigOutputReference <a name="IotJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotJobTimeoutConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">ResetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInProgressTimeoutInMinutes` <a name="ResetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```csharp
private void ResetInProgressTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">InProgressTimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="InProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```csharp
public double InProgressTimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `InProgressTimeoutInMinutes`<sup>Required</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```csharp
public double InProgressTimeoutInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotJobTimeoutConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

---



