# `syntheticsCanary` Submodule <a name="`syntheticsCanary` Submodule" id="@cdktn/provider-awscc.syntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCanary <a name="SyntheticsCanary" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary awscc_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanary(Construct Scope, string Id, SyntheticsCanaryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig">PutArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs">PutBrowserConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode">PutCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig">PutRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference">PutVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences">PutVisualReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig">ResetArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs">ResetBrowserConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion">ResetDeleteLambdaResourcesOnCanaryDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate">ResetDryRunAndUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod">ResetFailureRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup">ResetProvisionedResourceCleanup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags">ResetResourcesToReplicateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig">ResetRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation">ResetStartCanaryAfterCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod">ResetSuccessRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference">ResetVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences">ResetVisualReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArtifactConfig` <a name="PutArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig"></a>

```csharp
private void PutArtifactConfig(SyntheticsCanaryArtifactConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `PutBrowserConfigs` <a name="PutBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs"></a>

```csharp
private void PutBrowserConfigs(IResolvable|SyntheticsCanaryBrowserConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]

---

##### `PutCode` <a name="PutCode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode"></a>

```csharp
private void PutCode(SyntheticsCanaryCode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---

##### `PutRunConfig` <a name="PutRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig"></a>

```csharp
private void PutRunConfig(SyntheticsCanaryRunConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule"></a>

```csharp
private void PutSchedule(SyntheticsCanarySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags"></a>

```csharp
private void PutTags(IResolvable|SyntheticsCanaryTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]

---

##### `PutVisualReference` <a name="PutVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference"></a>

```csharp
private void PutVisualReference(SyntheticsCanaryVisualReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---

##### `PutVisualReferences` <a name="PutVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences"></a>

```csharp
private void PutVisualReferences(IResolvable|SyntheticsCanaryVisualReferences[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig"></a>

```csharp
private void PutVpcConfig(SyntheticsCanaryVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `ResetArtifactConfig` <a name="ResetArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig"></a>

```csharp
private void ResetArtifactConfig()
```

##### `ResetBrowserConfigs` <a name="ResetBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs"></a>

```csharp
private void ResetBrowserConfigs()
```

##### `ResetDeleteLambdaResourcesOnCanaryDeletion` <a name="ResetDeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion"></a>

```csharp
private void ResetDeleteLambdaResourcesOnCanaryDeletion()
```

##### `ResetDryRunAndUpdate` <a name="ResetDryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate"></a>

```csharp
private void ResetDryRunAndUpdate()
```

##### `ResetFailureRetentionPeriod` <a name="ResetFailureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod"></a>

```csharp
private void ResetFailureRetentionPeriod()
```

##### `ResetProvisionedResourceCleanup` <a name="ResetProvisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup"></a>

```csharp
private void ResetProvisionedResourceCleanup()
```

##### `ResetResourcesToReplicateTags` <a name="ResetResourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags"></a>

```csharp
private void ResetResourcesToReplicateTags()
```

##### `ResetRunConfig` <a name="ResetRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig"></a>

```csharp
private void ResetRunConfig()
```

##### `ResetStartCanaryAfterCreation` <a name="ResetStartCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation"></a>

```csharp
private void ResetStartCanaryAfterCreation()
```

##### `ResetSuccessRetentionPeriod` <a name="ResetSuccessRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod"></a>

```csharp
private void ResetSuccessRetentionPeriod()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVisualReference` <a name="ResetVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference"></a>

```csharp
private void ResetVisualReference()
```

##### `ResetVisualReferences` <a name="ResetVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences"></a>

```csharp
private void ResetVisualReferences()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SyntheticsCanary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SyntheticsCanary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SyntheticsCanary.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SyntheticsCanary.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsCanary to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig">ArtifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs">BrowserConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId">CanaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig">RunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference">VisualReference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences">VisualReferences</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput">ArtifactConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput">ArtifactS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput">BrowserConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput">CodeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput">DeleteLambdaResourcesOnCanaryDeletionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput">DryRunAndUpdateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput">FailureRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput">ProvisionedResourceCleanupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput">ResourcesToReplicateTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput">RunConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput">StartCanaryAfterCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput">SuccessRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput">VisualReferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput">VisualReferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location">ArtifactS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion">DeleteLambdaResourcesOnCanaryDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate">DryRunAndUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod">FailureRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup">ProvisionedResourceCleanup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags">ResourcesToReplicateTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation">StartCanaryAfterCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod">SuccessRetentionPeriod</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ArtifactConfig`<sup>Required</sup> <a name="ArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig"></a>

```csharp
public SyntheticsCanaryArtifactConfigOutputReference ArtifactConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `BrowserConfigs`<sup>Required</sup> <a name="BrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs"></a>

```csharp
public SyntheticsCanaryBrowserConfigsList BrowserConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a>

---

##### `CanaryId`<sup>Required</sup> <a name="CanaryId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId"></a>

```csharp
public string CanaryId { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code"></a>

```csharp
public SyntheticsCanaryCodeOutputReference Code { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RunConfig`<sup>Required</sup> <a name="RunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig"></a>

```csharp
public SyntheticsCanaryRunConfigOutputReference RunConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule"></a>

```csharp
public SyntheticsCanaryScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags"></a>

```csharp
public SyntheticsCanaryTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a>

---

##### `VisualReference`<sup>Required</sup> <a name="VisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference"></a>

```csharp
public SyntheticsCanaryVisualReferenceOutputReference VisualReference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a>

---

##### `VisualReferences`<sup>Required</sup> <a name="VisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences"></a>

```csharp
public SyntheticsCanaryVisualReferencesList VisualReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig"></a>

```csharp
public SyntheticsCanaryVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a>

---

##### `ArtifactConfigInput`<sup>Optional</sup> <a name="ArtifactConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput"></a>

```csharp
public IResolvable|SyntheticsCanaryArtifactConfig ArtifactConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `ArtifactS3LocationInput`<sup>Optional</sup> <a name="ArtifactS3LocationInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput"></a>

```csharp
public string ArtifactS3LocationInput { get; }
```

- *Type:* string

---

##### `BrowserConfigsInput`<sup>Optional</sup> <a name="BrowserConfigsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput"></a>

```csharp
public IResolvable|SyntheticsCanaryBrowserConfigs[] BrowserConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput"></a>

```csharp
public IResolvable|SyntheticsCanaryCode CodeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---

##### `DeleteLambdaResourcesOnCanaryDeletionInput`<sup>Optional</sup> <a name="DeleteLambdaResourcesOnCanaryDeletionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput"></a>

```csharp
public bool|IResolvable DeleteLambdaResourcesOnCanaryDeletionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DryRunAndUpdateInput`<sup>Optional</sup> <a name="DryRunAndUpdateInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput"></a>

```csharp
public bool|IResolvable DryRunAndUpdateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `FailureRetentionPeriodInput`<sup>Optional</sup> <a name="FailureRetentionPeriodInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput"></a>

```csharp
public double FailureRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProvisionedResourceCleanupInput`<sup>Optional</sup> <a name="ProvisionedResourceCleanupInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput"></a>

```csharp
public string ProvisionedResourceCleanupInput { get; }
```

- *Type:* string

---

##### `ResourcesToReplicateTagsInput`<sup>Optional</sup> <a name="ResourcesToReplicateTagsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput"></a>

```csharp
public string[] ResourcesToReplicateTagsInput { get; }
```

- *Type:* string[]

---

##### `RunConfigInput`<sup>Optional</sup> <a name="RunConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput"></a>

```csharp
public IResolvable|SyntheticsCanaryRunConfig RunConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput"></a>

```csharp
public IResolvable|SyntheticsCanarySchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `StartCanaryAfterCreationInput`<sup>Optional</sup> <a name="StartCanaryAfterCreationInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput"></a>

```csharp
public bool|IResolvable StartCanaryAfterCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SuccessRetentionPeriodInput`<sup>Optional</sup> <a name="SuccessRetentionPeriodInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput"></a>

```csharp
public double SuccessRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput"></a>

```csharp
public IResolvable|SyntheticsCanaryTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]

---

##### `VisualReferenceInput`<sup>Optional</sup> <a name="VisualReferenceInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReference VisualReferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---

##### `VisualReferencesInput`<sup>Optional</sup> <a name="VisualReferencesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferences[] VisualReferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput"></a>

```csharp
public IResolvable|SyntheticsCanaryVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `ArtifactS3Location`<sup>Required</sup> <a name="ArtifactS3Location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location"></a>

```csharp
public string ArtifactS3Location { get; }
```

- *Type:* string

---

##### `DeleteLambdaResourcesOnCanaryDeletion`<sup>Required</sup> <a name="DeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```csharp
public bool|IResolvable DeleteLambdaResourcesOnCanaryDeletion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DryRunAndUpdate`<sup>Required</sup> <a name="DryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate"></a>

```csharp
public bool|IResolvable DryRunAndUpdate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `FailureRetentionPeriod`<sup>Required</sup> <a name="FailureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod"></a>

```csharp
public double FailureRetentionPeriod { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProvisionedResourceCleanup`<sup>Required</sup> <a name="ProvisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup"></a>

```csharp
public string ProvisionedResourceCleanup { get; }
```

- *Type:* string

---

##### `ResourcesToReplicateTags`<sup>Required</sup> <a name="ResourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags"></a>

```csharp
public string[] ResourcesToReplicateTags { get; }
```

- *Type:* string[]

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `StartCanaryAfterCreation`<sup>Required</sup> <a name="StartCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation"></a>

```csharp
public bool|IResolvable StartCanaryAfterCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SuccessRetentionPeriod`<sup>Required</sup> <a name="SuccessRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod"></a>

```csharp
public double SuccessRetentionPeriod { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCanaryArtifactConfig <a name="SyntheticsCanaryArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryArtifactConfig {
    SyntheticsCanaryArtifactConfigS3Encryption S3Encryption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | Encryption configuration for uploading artifacts to S3. |

---

##### `S3Encryption`<sup>Optional</sup> <a name="S3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption"></a>

```csharp
public SyntheticsCanaryArtifactConfigS3Encryption S3Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

Encryption configuration for uploading artifacts to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}

---

### SyntheticsCanaryArtifactConfigS3Encryption <a name="SyntheticsCanaryArtifactConfigS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryArtifactConfigS3Encryption {
    string EncryptionMode = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | KMS key Arn for encrypting artifacts when uploading to S3. |

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; set; }
```

- *Type:* string

Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

KMS key Arn for encrypting artifacts when uploading to S3.

You must specify KMS key Arn for SSE_KMS encryption mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}

---

### SyntheticsCanaryBrowserConfigs <a name="SyntheticsCanaryBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryBrowserConfigs {
    string BrowserType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType">BrowserType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `BrowserType`<sup>Optional</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType"></a>

```csharp
public string BrowserType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryCode <a name="SyntheticsCanaryCode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryCode {
    string[] BlueprintTypes = null,
    IResolvable|SyntheticsCanaryCodeDependencies[] Dependencies = null,
    string Handler = null,
    string S3Bucket = null,
    string S3Key = null,
    string S3ObjectVersion = null,
    string Script = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes">BlueprintTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies">Dependencies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]</code> | List of Lambda layers to attach to the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler">Handler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script">Script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}. |

---

##### `BlueprintTypes`<sup>Optional</sup> <a name="BlueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes"></a>

```csharp
public string[] BlueprintTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}.

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies"></a>

```csharp
public IResolvable|SyntheticsCanaryCodeDependencies[] Dependencies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]

List of Lambda layers to attach to the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#dependencies SyntheticsCanary#dependencies}

---

##### `Handler`<sup>Optional</sup> <a name="Handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler"></a>

```csharp
public string Handler { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}.

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

##### `S3ObjectVersion`<sup>Optional</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}.

---

### SyntheticsCanaryCodeDependencies <a name="SyntheticsCanaryCodeDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryCodeDependencies {
    string Reference = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference">Reference</a></code> | <code>string</code> | ARN of the Lambda layer. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type">Type</a></code> | <code>string</code> | Type of dependency. |

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference"></a>

```csharp
public string Reference { get; set; }
```

- *Type:* string

ARN of the Lambda layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#reference SyntheticsCanary#reference}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#type SyntheticsCanary#type}

---

### SyntheticsCanaryConfig <a name="SyntheticsCanaryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ArtifactS3Location,
    SyntheticsCanaryCode Code,
    string ExecutionRoleArn,
    string Name,
    string RuntimeVersion,
    SyntheticsCanarySchedule Schedule,
    SyntheticsCanaryArtifactConfig ArtifactConfig = null,
    IResolvable|SyntheticsCanaryBrowserConfigs[] BrowserConfigs = null,
    bool|IResolvable DeleteLambdaResourcesOnCanaryDeletion = null,
    bool|IResolvable DryRunAndUpdate = null,
    double FailureRetentionPeriod = null,
    string ProvisionedResourceCleanup = null,
    string[] ResourcesToReplicateTags = null,
    SyntheticsCanaryRunConfig RunConfig = null,
    bool|IResolvable StartCanaryAfterCreation = null,
    double SuccessRetentionPeriod = null,
    IResolvable|SyntheticsCanaryTags[] Tags = null,
    SyntheticsCanaryVisualReference VisualReference = null,
    IResolvable|SyntheticsCanaryVisualReferences[] VisualReferences = null,
    SyntheticsCanaryVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location">ArtifactS3Location</a></code> | <code>string</code> | Provide the s3 bucket output location for test results. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | Provide the canary script source. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Lambda Execution role used to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name">Name</a></code> | <code>string</code> | Name of the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | Runtime version of Synthetics Library. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | Frequency to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig">ArtifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | Provide artifact configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs">BrowserConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]</code> | List of browser configurations for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion">DeleteLambdaResourcesOnCanaryDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Deletes associated lambda resources created by Synthetics if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate">DryRunAndUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod">FailureRetentionPeriod</a></code> | <code>double</code> | Retention period of failed canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup">ProvisionedResourceCleanup</a></code> | <code>string</code> | Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags">ResourcesToReplicateTags</a></code> | <code>string[]</code> | List of resources which canary tags should be replicated to. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig">RunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | Provide canary run configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation">StartCanaryAfterCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Runs canary if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod">SuccessRetentionPeriod</a></code> | <code>double</code> | Retention period of successful canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference">VisualReference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | Visual reference configuration for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences">VisualReferences</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]</code> | List of visual references for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | Provide VPC Configuration if enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ArtifactS3Location`<sup>Required</sup> <a name="ArtifactS3Location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location"></a>

```csharp
public string ArtifactS3Location { get; set; }
```

- *Type:* string

Provide the s3 bucket output location for test results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code"></a>

```csharp
public SyntheticsCanaryCode Code { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

Provide the canary script source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#code SyntheticsCanary#code}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Lambda Execution role used to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#name SyntheticsCanary#name}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

Runtime version of Synthetics Library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule"></a>

```csharp
public SyntheticsCanarySchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

Frequency to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `ArtifactConfig`<sup>Optional</sup> <a name="ArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig"></a>

```csharp
public SyntheticsCanaryArtifactConfig ArtifactConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

Provide artifact configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `BrowserConfigs`<sup>Optional</sup> <a name="BrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs"></a>

```csharp
public IResolvable|SyntheticsCanaryBrowserConfigs[] BrowserConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]

List of browser configurations for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_configs SyntheticsCanary#browser_configs}

---

##### `DeleteLambdaResourcesOnCanaryDeletion`<sup>Optional</sup> <a name="DeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```csharp
public bool|IResolvable DeleteLambdaResourcesOnCanaryDeletion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Deletes associated lambda resources created by Synthetics if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#delete_lambda_resources_on_canary_deletion SyntheticsCanary#delete_lambda_resources_on_canary_deletion}

---

##### `DryRunAndUpdate`<sup>Optional</sup> <a name="DryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate"></a>

```csharp
public bool|IResolvable DryRunAndUpdate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update.

Default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#dry_run_and_update SyntheticsCanary#dry_run_and_update}

---

##### `FailureRetentionPeriod`<sup>Optional</sup> <a name="FailureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod"></a>

```csharp
public double FailureRetentionPeriod { get; set; }
```

- *Type:* double

Retention period of failed canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}

---

##### `ProvisionedResourceCleanup`<sup>Optional</sup> <a name="ProvisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup"></a>

```csharp
public string ProvisionedResourceCleanup { get; set; }
```

- *Type:* string

Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#provisioned_resource_cleanup SyntheticsCanary#provisioned_resource_cleanup}

---

##### `ResourcesToReplicateTags`<sup>Optional</sup> <a name="ResourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags"></a>

```csharp
public string[] ResourcesToReplicateTags { get; set; }
```

- *Type:* string[]

List of resources which canary tags should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#resources_to_replicate_tags SyntheticsCanary#resources_to_replicate_tags}

---

##### `RunConfig`<sup>Optional</sup> <a name="RunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig"></a>

```csharp
public SyntheticsCanaryRunConfig RunConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

Provide canary run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `StartCanaryAfterCreation`<sup>Optional</sup> <a name="StartCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation"></a>

```csharp
public bool|IResolvable StartCanaryAfterCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Runs canary if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#start_canary_after_creation SyntheticsCanary#start_canary_after_creation}

---

##### `SuccessRetentionPeriod`<sup>Optional</sup> <a name="SuccessRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod"></a>

```csharp
public double SuccessRetentionPeriod { get; set; }
```

- *Type:* double

Retention period of successful canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags"></a>

```csharp
public IResolvable|SyntheticsCanaryTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `VisualReference`<sup>Optional</sup> <a name="VisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference"></a>

```csharp
public SyntheticsCanaryVisualReference VisualReference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

Visual reference configuration for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#visual_reference SyntheticsCanary#visual_reference}

---

##### `VisualReferences`<sup>Optional</sup> <a name="VisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferences[] VisualReferences { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]

List of visual references for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#visual_references SyntheticsCanary#visual_references}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig"></a>

```csharp
public SyntheticsCanaryVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

Provide VPC Configuration if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

### SyntheticsCanaryRunConfig <a name="SyntheticsCanaryRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryRunConfig {
    bool|IResolvable ActiveTracing = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    double EphemeralStorage = null,
    double MemoryInMb = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing">ActiveTracing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable active tracing if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variable key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage">EphemeralStorage</a></code> | <code>double</code> | Provide ephemeralStorage available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb">MemoryInMb</a></code> | <code>double</code> | Provide maximum memory available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Provide maximum canary timeout per run in seconds. |

---

##### `ActiveTracing`<sup>Optional</sup> <a name="ActiveTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing"></a>

```csharp
public bool|IResolvable ActiveTracing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable active tracing if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variable key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage"></a>

```csharp
public double EphemeralStorage { get; set; }
```

- *Type:* double

Provide ephemeralStorage available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ephemeral_storage SyntheticsCanary#ephemeral_storage}

---

##### `MemoryInMb`<sup>Optional</sup> <a name="MemoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb"></a>

```csharp
public double MemoryInMb { get; set; }
```

- *Type:* double

Provide maximum memory available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Provide maximum canary timeout per run in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}

---

### SyntheticsCanarySchedule <a name="SyntheticsCanarySchedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanarySchedule {
    string Expression,
    string DurationInSeconds = null,
    SyntheticsCanaryScheduleRetryConfig RetryConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds">DurationInSeconds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | Provide canary auto retry configuration. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}.

---

##### `DurationInSeconds`<sup>Optional</sup> <a name="DurationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds"></a>

```csharp
public string DurationInSeconds { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}.

---

##### `RetryConfig`<sup>Optional</sup> <a name="RetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig"></a>

```csharp
public SyntheticsCanaryScheduleRetryConfig RetryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

Provide canary auto retry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#retry_config SyntheticsCanary#retry_config}

---

### SyntheticsCanaryScheduleRetryConfig <a name="SyntheticsCanaryScheduleRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryScheduleRetryConfig {
    double MaxRetries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | maximum times the canary will be retried upon the scheduled run failure. |

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

maximum times the canary will be retried upon the scheduled run failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#max_retries SyntheticsCanary#max_retries}

---

### SyntheticsCanaryTags <a name="SyntheticsCanaryTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#key SyntheticsCanary#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#value SyntheticsCanary#value}

---

### SyntheticsCanaryVisualReference <a name="SyntheticsCanaryVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReference {
    string BaseCanaryRunId = null,
    IResolvable|SyntheticsCanaryVisualReferenceBaseScreenshots[] BaseScreenshots = null,
    string BrowserType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>string</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots">BaseScreenshots</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]</code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType">BrowserType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `BaseCanaryRunId`<sup>Optional</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId"></a>

```csharp
public string BaseCanaryRunId { get; set; }
```

- *Type:* string

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `BaseScreenshots`<sup>Optional</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferenceBaseScreenshots[] BaseScreenshots { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `BrowserType`<sup>Optional</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType"></a>

```csharp
public string BrowserType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferenceBaseScreenshots <a name="SyntheticsCanaryVisualReferenceBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferenceBaseScreenshots {
    string[] IgnoreCoordinates = null,
    string ScreenshotName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>string[]</code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName">ScreenshotName</a></code> | <code>string</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `IgnoreCoordinates`<sup>Optional</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates"></a>

```csharp
public string[] IgnoreCoordinates { get; set; }
```

- *Type:* string[]

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `ScreenshotName`<sup>Optional</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName"></a>

```csharp
public string ScreenshotName { get; set; }
```

- *Type:* string

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVisualReferences <a name="SyntheticsCanaryVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferences {
    string BaseCanaryRunId = null,
    IResolvable|SyntheticsCanaryVisualReferencesBaseScreenshots[] BaseScreenshots = null,
    string BrowserType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>string</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots">BaseScreenshots</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]</code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType">BrowserType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `BaseCanaryRunId`<sup>Optional</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId"></a>

```csharp
public string BaseCanaryRunId { get; set; }
```

- *Type:* string

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `BaseScreenshots`<sup>Optional</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferencesBaseScreenshots[] BaseScreenshots { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `BrowserType`<sup>Optional</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType"></a>

```csharp
public string BrowserType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferencesBaseScreenshots <a name="SyntheticsCanaryVisualReferencesBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferencesBaseScreenshots {
    string[] IgnoreCoordinates = null,
    string ScreenshotName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>string[]</code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName">ScreenshotName</a></code> | <code>string</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `IgnoreCoordinates`<sup>Optional</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates"></a>

```csharp
public string[] IgnoreCoordinates { get; set; }
```

- *Type:* string[]

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `ScreenshotName`<sup>Optional</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName"></a>

```csharp
public string ScreenshotName { get; set; }
```

- *Type:* string

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVpcConfig <a name="SyntheticsCanaryVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVpcConfig {
    bool|IResolvable Ipv6AllowedForDualStack = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack">Ipv6AllowedForDualStack</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}. |

---

##### `Ipv6AllowedForDualStack`<sup>Optional</sup> <a name="Ipv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack"></a>

```csharp
public bool|IResolvable Ipv6AllowedForDualStack { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ipv_6_allowed_for_dual_stack SyntheticsCanary#ipv_6_allowed_for_dual_stack}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCanaryArtifactConfigOutputReference <a name="SyntheticsCanaryArtifactConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryArtifactConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption">PutS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption">ResetS3Encryption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Encryption` <a name="PutS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption"></a>

```csharp
private void PutS3Encryption(SyntheticsCanaryArtifactConfigS3Encryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `ResetS3Encryption` <a name="ResetS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption"></a>

```csharp
private void ResetS3Encryption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput">S3EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Encryption`<sup>Required</sup> <a name="S3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```csharp
public SyntheticsCanaryArtifactConfigS3EncryptionOutputReference S3Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `S3EncryptionInput`<sup>Optional</sup> <a name="S3EncryptionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput"></a>

```csharp
public IResolvable|SyntheticsCanaryArtifactConfigS3Encryption S3EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryArtifactConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---


### SyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="SyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryArtifactConfigS3EncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode"></a>

```csharp
private void ResetEncryptionMode()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput"></a>

```csharp
public string EncryptionModeInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryArtifactConfigS3Encryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---


### SyntheticsCanaryBrowserConfigsList <a name="SyntheticsCanaryBrowserConfigsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryBrowserConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get"></a>

```csharp
private SyntheticsCanaryBrowserConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryBrowserConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]

---


### SyntheticsCanaryBrowserConfigsOutputReference <a name="SyntheticsCanaryBrowserConfigsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryBrowserConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType">ResetBrowserType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBrowserType` <a name="ResetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType"></a>

```csharp
private void ResetBrowserType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput">BrowserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType">BrowserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrowserTypeInput`<sup>Optional</sup> <a name="BrowserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput"></a>

```csharp
public string BrowserTypeInput { get; }
```

- *Type:* string

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType"></a>

```csharp
public string BrowserType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryBrowserConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>

---


### SyntheticsCanaryCodeDependenciesList <a name="SyntheticsCanaryCodeDependenciesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryCodeDependenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get"></a>

```csharp
private SyntheticsCanaryCodeDependenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryCodeDependencies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]

---


### SyntheticsCanaryCodeDependenciesOutputReference <a name="SyntheticsCanaryCodeDependenciesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryCodeDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReference` <a name="ResetReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference"></a>

```csharp
private void ResetReference()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput">ReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference">Reference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput"></a>

```csharp
public string ReferenceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference"></a>

```csharp
public string Reference { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryCodeDependencies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>

---


### SyntheticsCanaryCodeOutputReference <a name="SyntheticsCanaryCodeOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryCodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies">PutDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes">ResetBlueprintTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler">ResetHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion">ResetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript">ResetScript</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDependencies` <a name="PutDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies"></a>

```csharp
private void PutDependencies(IResolvable|SyntheticsCanaryCodeDependencies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]

---

##### `ResetBlueprintTypes` <a name="ResetBlueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes"></a>

```csharp
private void ResetBlueprintTypes()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies"></a>

```csharp
private void ResetDependencies()
```

##### `ResetHandler` <a name="ResetHandler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler"></a>

```csharp
private void ResetHandler()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```

##### `ResetS3ObjectVersion` <a name="ResetS3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion"></a>

```csharp
private void ResetS3ObjectVersion()
```

##### `ResetScript` <a name="ResetScript" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript"></a>

```csharp
private void ResetScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn">SourceLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput">BlueprintTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput">HandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput">S3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes">BlueprintTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler">Handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies"></a>

```csharp
public SyntheticsCanaryCodeDependenciesList Dependencies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a>

---

##### `SourceLocationArn`<sup>Required</sup> <a name="SourceLocationArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn"></a>

```csharp
public string SourceLocationArn { get; }
```

- *Type:* string

---

##### `BlueprintTypesInput`<sup>Optional</sup> <a name="BlueprintTypesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput"></a>

```csharp
public string[] BlueprintTypesInput { get; }
```

- *Type:* string[]

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput"></a>

```csharp
public IResolvable|SyntheticsCanaryCodeDependencies[] DependenciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]

---

##### `HandlerInput`<sup>Optional</sup> <a name="HandlerInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput"></a>

```csharp
public string HandlerInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3ObjectVersionInput`<sup>Optional</sup> <a name="S3ObjectVersionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput"></a>

```csharp
public string S3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `BlueprintTypes`<sup>Required</sup> <a name="BlueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes"></a>

```csharp
public string[] BlueprintTypes { get; }
```

- *Type:* string[]

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler"></a>

```csharp
public string Handler { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryCode InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---


### SyntheticsCanaryRunConfigOutputReference <a name="SyntheticsCanaryRunConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryRunConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing">ResetActiveTracing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb">ResetMemoryInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveTracing` <a name="ResetActiveTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing"></a>

```csharp
private void ResetActiveTracing()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage"></a>

```csharp
private void ResetEphemeralStorage()
```

##### `ResetMemoryInMb` <a name="ResetMemoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb"></a>

```csharp
private void ResetMemoryInMb()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput">ActiveTracingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput">MemoryInMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing">ActiveTracing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb">MemoryInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveTracingInput`<sup>Optional</sup> <a name="ActiveTracingInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput"></a>

```csharp
public bool|IResolvable ActiveTracingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput"></a>

```csharp
public double EphemeralStorageInput { get; }
```

- *Type:* double

---

##### `MemoryInMbInput`<sup>Optional</sup> <a name="MemoryInMbInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput"></a>

```csharp
public double MemoryInMbInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ActiveTracing`<sup>Required</sup> <a name="ActiveTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```csharp
public bool|IResolvable ActiveTracing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage"></a>

```csharp
public double EphemeralStorage { get; }
```

- *Type:* double

---

##### `MemoryInMb`<sup>Required</sup> <a name="MemoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```csharp
public double MemoryInMb { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryRunConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---


### SyntheticsCanaryScheduleOutputReference <a name="SyntheticsCanaryScheduleOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig">PutRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds">ResetDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig">ResetRetryConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetryConfig` <a name="PutRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig"></a>

```csharp
private void PutRetryConfig(SyntheticsCanaryScheduleRetryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---

##### `ResetDurationInSeconds` <a name="ResetDurationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds"></a>

```csharp
private void ResetDurationInSeconds()
```

##### `ResetRetryConfig` <a name="ResetRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig"></a>

```csharp
private void ResetRetryConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput">DurationInSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput">RetryConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds">DurationInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetryConfig`<sup>Required</sup> <a name="RetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig"></a>

```csharp
public SyntheticsCanaryScheduleRetryConfigOutputReference RetryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a>

---

##### `DurationInSecondsInput`<sup>Optional</sup> <a name="DurationInSecondsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput"></a>

```csharp
public string DurationInSecondsInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `RetryConfigInput`<sup>Optional</sup> <a name="RetryConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput"></a>

```csharp
public IResolvable|SyntheticsCanaryScheduleRetryConfig RetryConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---

##### `DurationInSeconds`<sup>Required</sup> <a name="DurationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```csharp
public string DurationInSeconds { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanarySchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---


### SyntheticsCanaryScheduleRetryConfigOutputReference <a name="SyntheticsCanaryScheduleRetryConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryScheduleRetryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryScheduleRetryConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---


### SyntheticsCanaryTagsList <a name="SyntheticsCanaryTagsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get"></a>

```csharp
private SyntheticsCanaryTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]

---


### SyntheticsCanaryTagsOutputReference <a name="SyntheticsCanaryTagsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsList <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferenceBaseScreenshotsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get"></a>

```csharp
private SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferenceBaseScreenshots[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates">ResetIgnoreCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName">ResetScreenshotName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCoordinates` <a name="ResetIgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```csharp
private void ResetIgnoreCoordinates()
```

##### `ResetScreenshotName` <a name="ResetScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName"></a>

```csharp
private void ResetScreenshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">IgnoreCoordinatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput">ScreenshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName">ScreenshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCoordinatesInput`<sup>Optional</sup> <a name="IgnoreCoordinatesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```csharp
public string[] IgnoreCoordinatesInput { get; }
```

- *Type:* string[]

---

##### `ScreenshotNameInput`<sup>Optional</sup> <a name="ScreenshotNameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```csharp
public string ScreenshotNameInput { get; }
```

- *Type:* string

---

##### `IgnoreCoordinates`<sup>Required</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```csharp
public string[] IgnoreCoordinates { get; }
```

- *Type:* string[]

---

##### `ScreenshotName`<sup>Required</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName"></a>

```csharp
public string ScreenshotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferenceBaseScreenshots InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>

---


### SyntheticsCanaryVisualReferenceOutputReference <a name="SyntheticsCanaryVisualReferenceOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots">PutBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId">ResetBaseCanaryRunId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots">ResetBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType">ResetBrowserType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseScreenshots` <a name="PutBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots"></a>

```csharp
private void PutBaseScreenshots(IResolvable|SyntheticsCanaryVisualReferenceBaseScreenshots[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]

---

##### `ResetBaseCanaryRunId` <a name="ResetBaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId"></a>

```csharp
private void ResetBaseCanaryRunId()
```

##### `ResetBaseScreenshots` <a name="ResetBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots"></a>

```csharp
private void ResetBaseScreenshots()
```

##### `ResetBrowserType` <a name="ResetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType"></a>

```csharp
private void ResetBrowserType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots">BaseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput">BaseCanaryRunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput">BaseScreenshotsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput">BrowserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType">BrowserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseScreenshots`<sup>Required</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots"></a>

```csharp
public SyntheticsCanaryVisualReferenceBaseScreenshotsList BaseScreenshots { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a>

---

##### `BaseCanaryRunIdInput`<sup>Optional</sup> <a name="BaseCanaryRunIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput"></a>

```csharp
public string BaseCanaryRunIdInput { get; }
```

- *Type:* string

---

##### `BaseScreenshotsInput`<sup>Optional</sup> <a name="BaseScreenshotsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferenceBaseScreenshots[] BaseScreenshotsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]

---

##### `BrowserTypeInput`<sup>Optional</sup> <a name="BrowserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput"></a>

```csharp
public string BrowserTypeInput { get; }
```

- *Type:* string

---

##### `BaseCanaryRunId`<sup>Required</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId"></a>

```csharp
public string BaseCanaryRunId { get; }
```

- *Type:* string

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType"></a>

```csharp
public string BrowserType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsList <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferencesBaseScreenshotsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get"></a>

```csharp
private SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferencesBaseScreenshots[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates">ResetIgnoreCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName">ResetScreenshotName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreCoordinates` <a name="ResetIgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```csharp
private void ResetIgnoreCoordinates()
```

##### `ResetScreenshotName` <a name="ResetScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName"></a>

```csharp
private void ResetScreenshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">IgnoreCoordinatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput">ScreenshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName">ScreenshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreCoordinatesInput`<sup>Optional</sup> <a name="IgnoreCoordinatesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```csharp
public string[] IgnoreCoordinatesInput { get; }
```

- *Type:* string[]

---

##### `ScreenshotNameInput`<sup>Optional</sup> <a name="ScreenshotNameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```csharp
public string ScreenshotNameInput { get; }
```

- *Type:* string

---

##### `IgnoreCoordinates`<sup>Required</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```csharp
public string[] IgnoreCoordinates { get; }
```

- *Type:* string[]

---

##### `ScreenshotName`<sup>Required</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName"></a>

```csharp
public string ScreenshotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferencesBaseScreenshots InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>

---


### SyntheticsCanaryVisualReferencesList <a name="SyntheticsCanaryVisualReferencesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get"></a>

```csharp
private SyntheticsCanaryVisualReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferences[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]

---


### SyntheticsCanaryVisualReferencesOutputReference <a name="SyntheticsCanaryVisualReferencesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVisualReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots">PutBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId">ResetBaseCanaryRunId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots">ResetBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType">ResetBrowserType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseScreenshots` <a name="PutBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots"></a>

```csharp
private void PutBaseScreenshots(IResolvable|SyntheticsCanaryVisualReferencesBaseScreenshots[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]

---

##### `ResetBaseCanaryRunId` <a name="ResetBaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId"></a>

```csharp
private void ResetBaseCanaryRunId()
```

##### `ResetBaseScreenshots` <a name="ResetBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots"></a>

```csharp
private void ResetBaseScreenshots()
```

##### `ResetBrowserType` <a name="ResetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType"></a>

```csharp
private void ResetBrowserType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots">BaseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput">BaseCanaryRunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput">BaseScreenshotsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput">BrowserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType">BrowserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseScreenshots`<sup>Required</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots"></a>

```csharp
public SyntheticsCanaryVisualReferencesBaseScreenshotsList BaseScreenshots { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a>

---

##### `BaseCanaryRunIdInput`<sup>Optional</sup> <a name="BaseCanaryRunIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput"></a>

```csharp
public string BaseCanaryRunIdInput { get; }
```

- *Type:* string

---

##### `BaseScreenshotsInput`<sup>Optional</sup> <a name="BaseScreenshotsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferencesBaseScreenshots[] BaseScreenshotsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]

---

##### `BrowserTypeInput`<sup>Optional</sup> <a name="BrowserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput"></a>

```csharp
public string BrowserTypeInput { get; }
```

- *Type:* string

---

##### `BaseCanaryRunId`<sup>Required</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId"></a>

```csharp
public string BaseCanaryRunId { get; }
```

- *Type:* string

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType"></a>

```csharp
public string BrowserType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryVisualReferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>

---


### SyntheticsCanaryVpcConfigOutputReference <a name="SyntheticsCanaryVpcConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SyntheticsCanaryVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack">ResetIpv6AllowedForDualStack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6AllowedForDualStack` <a name="ResetIpv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack"></a>

```csharp
private void ResetIpv6AllowedForDualStack()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput">Ipv6AllowedForDualStackInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack">Ipv6AllowedForDualStack</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6AllowedForDualStackInput`<sup>Optional</sup> <a name="Ipv6AllowedForDualStackInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput"></a>

```csharp
public bool|IResolvable Ipv6AllowedForDualStackInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Ipv6AllowedForDualStack`<sup>Required</sup> <a name="Ipv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```csharp
public bool|IResolvable Ipv6AllowedForDualStack { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsCanaryVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---



